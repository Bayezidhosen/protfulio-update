import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { SKILLS } from '../../data/portfolio';

export function SkillsSphere() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 450;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.z = 6.2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Create Canvas Sprite textures for each skill
    const sprites: THREE.Sprite[] = [];
    const skillList = SKILLS;
    const count = skillList.length;

    // Fibonacci sphere distribution for even spread
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden ratio angle

    skillList.forEach((skill, i) => {
      const y = 1 - (i / (count - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y); // radius at y
      const theta = phi * i; // golden angle increment

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      // Draw canvas label
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 128;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Background rounded box
        ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
        ctx.strokeStyle = skill.color;
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.roundRect(10, 10, 236, 108, 24);
        ctx.fill();
        ctx.stroke();

        // Skill Text
        ctx.font = 'bold 36px Outfit, sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(skill.name, 128, 64);
      }

      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;

      const spriteMat = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: 0.95
      });

      const sprite = new THREE.Sprite(spriteMat);
      const sphereRadius = 2.4;
      sprite.position.set(x * sphereRadius, y * sphereRadius, z * sphereRadius);
      sprite.scale.set(1.5, 0.75, 1);
      (sprite as any).userData = { name: skill.name };

      group.add(sprite);
      sprites.push(sprite);
    });

    // Central core particle
    const coreGeom = new THREE.IcosahedronGeometry(0.8, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });
    const coreMesh = new THREE.Mesh(coreGeom, coreMat);
    group.add(coreMesh);

    // Interaction vars
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let rotationVelocity = { x: 0.002, y: 0.003 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        group.rotation.y += deltaX * 0.005;
        group.rotation.x += deltaY * 0.005;

        rotationVelocity = { x: deltaY * 0.002, y: deltaX * 0.002 };
        previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    const observer = new ResizeObserver(handleResize);
    observer.observe(container);

    let frameId = 0;
    const animate = () => {
      if (!isDragging) {
        group.rotation.y += rotationVelocity.y;
        group.rotation.x += rotationVelocity.x;
        // Damping velocity back to default slow orbit
        rotationVelocity.x = THREE.MathUtils.damp(rotationVelocity.x, 0.001, 1, 0.016);
        rotationVelocity.y = THREE.MathUtils.damp(rotationVelocity.y, 0.0025, 1, 0.016);
      }

      coreMesh.rotation.y -= 0.004;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
      domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      sprites.forEach(s => {
        s.material.map?.dispose();
        s.material.dispose();
      });
      coreGeom.dispose();
      coreMat.dispose();
      renderer.dispose();
      if (domElement.parentElement) {
        domElement.parentElement.removeChild(domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[450px] flex flex-col items-center justify-center">
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        title="Interactive 3D Skill Orbit: Drag to spin"
      />
      <div className="absolute bottom-2 text-center text-xs text-slate-600 dark:text-slate-400 font-mono">
        Drag orbit to rotate · Procedural WebGL tag cloud
      </div>
    </div>
  );
}
