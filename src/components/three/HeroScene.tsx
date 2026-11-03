import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { useTheme } from '../../context/ThemeContext';

// Pre-allocated reusable math vectors (Zero GC in animation loop)
const _pointerTarget = new THREE.Vector2(0, 0);
const _currentPointer = new THREE.Vector2(0, 0);

interface HeroSceneProps {
  interactive?: boolean;
}

export function HeroScene({ interactive = true }: HeroSceneProps) {
  const { theme } = useTheme();
  const mountRef = useRef<HTMLDivElement>(null);
  const [wireframeMode, setWireframeMode] = useState(false);
  const [rotationSpeed, setRotationSpeed] = useState<number>(1);
  const [activeGeometry, setActiveGeometry] = useState<'prism' | 'torus' | 'octahedron'>('prism');
  const sceneRef = useRef<THREE.Scene | null>(null);

  // Keep state refs for render loop access
  const speedRef = useRef(1);
  const wireframeRef = useRef(false);
  const geomTypeRef = useRef<'prism' | 'torus' | 'octahedron'>('prism');

  useEffect(() => {
    speedRef.current = rotationSpeed;
  }, [rotationSpeed]);

  useEffect(() => {
    wireframeRef.current = wireframeMode;
  }, [wireframeMode]);

  useEffect(() => {
    geomTypeRef.current = activeGeometry;
  }, [activeGeometry]);

  // Dynamically update fog on theme change
  useEffect(() => {
    if (sceneRef.current) {
      const fogColor = theme === 'dark' ? 0x020617 : 0xf8fafc;
      sceneRef.current.fog = new THREE.FogExp2(fogColor, 0.04);
    }
  }, [theme]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect software WebGL guard
    const isSoftwareGl = (() => {
      try {
        const gl = document.createElement('canvas').getContext('webgl2');
        if (!gl) return true;
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
        const gpu = String(gl.getParameter(param));
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return false;
      }
    })();

    // Respect user's motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene & Camera
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const initialFogColor = theme === 'dark' ? 0x020617 : 0xf8fafc;
    scene.fog = new THREE.FogExp2(initialFogColor, 0.04);

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 550;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // Procedural Studio Environment Reflection
    try {
      const pmremGenerator = new THREE.PMREMGenerator(renderer);
      scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
      pmremGenerator.dispose();
    } catch {
      // Fallback gracefully if environment map generation fails
    }

    // Studio 3-Point Lighting
    const ambientLight = new THREE.AmbientLight(0x0f172a, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x00f2fe, 3.5); // Electric Cyan
    keyLight.position.set(4, 5, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x7928ca, 3.0); // Violet
    fillLight.position.set(-5, -3, 3);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 2.0);
    rimLight.position.set(0, 5, -5);
    scene.add(rimLight);

    // Root Group for interactive rotation
    const modelGroup = new THREE.Group();
    scene.add(modelGroup);

    // 1. Primary Composite Model: Central Creative Core
    // Outer wireframe shell
    const outerIcosaGeom = new THREE.IcosahedronGeometry(1.9, 1);
    const wireframeMat = new THREE.MeshStandardMaterial({
      color: 0x00f2fe,
      roughness: 0.2,
      metalness: 0.9,
      wireframe: true,
      transparent: true,
      opacity: 0.65
    });
    const outerWireframeMesh = new THREE.Mesh(outerIcosaGeom, wireframeMat);
    modelGroup.add(outerWireframeMesh);

    // Inner glowing crystal core
    const innerGeom = new THREE.IcosahedronGeometry(1.2, 0);
    const innerMat = new THREE.MeshPhysicalMaterial({
      color: 0x090e17,
      roughness: 0.15,
      metalness: 0.85,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9,
      wireframe: false
    });
    const innerMesh = new THREE.Mesh(innerGeom, innerMat);
    modelGroup.add(innerMesh);

    // Secondary read: Outer Orbital Rings (representing fullstack architecture & reactivity)
    const ringGroup = new THREE.Group();
    modelGroup.add(ringGroup);

    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0x00f2fe,
      roughness: 0.3,
      metalness: 0.8,
      transparent: true,
      opacity: 0.75
    });
    const ringGeom1 = new THREE.TorusGeometry(2.6, 0.025, 16, 100);
    const ringMesh1 = new THREE.Mesh(ringGeom1, ringMat1);
    ringMesh1.rotation.x = Math.PI / 3;
    ringMesh1.rotation.y = Math.PI / 6;
    ringGroup.add(ringMesh1);

    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      roughness: 0.3,
      metalness: 0.8,
      transparent: true,
      opacity: 0.65
    });
    const ringGeom2 = new THREE.TorusGeometry(3.0, 0.02, 16, 100);
    const ringMesh2 = new THREE.Mesh(ringGeom2, ringMat2);
    ringMesh2.rotation.x = -Math.PI / 4;
    ringMesh2.rotation.z = Math.PI / 5;
    ringGroup.add(ringMesh2);

    // Small orbiting satellite tech nodes
    const nodeGeom = new THREE.SphereGeometry(0.08, 16, 16);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.9
    });
    const satelliteCount = 4;
    const satellites: THREE.Mesh[] = [];
    for (let i = 0; i < satelliteCount; i++) {
      const sat = new THREE.Mesh(nodeGeom, nodeMat);
      ringGroup.add(sat);
      satellites.push(sat);
    }

    // Floating Constellation Coordinates (Procedural points)
    const particleCount = isSoftwareGl ? 70 : 180;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color(0x00f2fe);
    const violetColor = new THREE.Color(0xa855f7);

    for (let i = 0; i < particleCount; i++) {
      const radius = 3.2 + Math.random() * 2.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);

      const mixed = Math.random() > 0.5 ? cyanColor : violetColor;
      particleColors[i * 3] = mixed.r;
      particleColors[i * 3 + 1] = mixed.g;
      particleColors[i * 3 + 2] = mixed.b;
    }

    const particleGeom = new THREE.BufferGeometry();
    particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeom.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.6
    });

    const particles = new THREE.Points(particleGeom, particleMat);
    scene.add(particles);

    // Mouse Tracking Event Listeners
    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      _pointerTarget.set(Math.max(-1, Math.min(1, x)), Math.max(-1, Math.min(1, y)));
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        const x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -(((touch.clientY - rect.top) / rect.height) * 2 - 1);
        _pointerTarget.set(Math.max(-1, Math.min(1, x)), Math.max(-1, Math.min(1, y)));
      }
    };

    if (interactive) {
      window.addEventListener('mousemove', handlePointerMove, { passive: true });
      container.addEventListener('touchmove', handleTouchMove, { passive: true });
    }

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId = 0;
    const clock = new THREE.Clock();

    const tick = () => {
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Exponential damping for mouse pointer tracking
      _currentPointer.x = THREE.MathUtils.damp(_currentPointer.x, _pointerTarget.x, 3.5, delta);
      _currentPointer.y = THREE.MathUtils.damp(_currentPointer.y, _pointerTarget.y, 3.5, delta);

      const effectiveSpeed = prefersReducedMotion ? 0.2 : speedRef.current;

      // Model group gentle rotation and tilt
      modelGroup.rotation.y += delta * 0.35 * effectiveSpeed;
      modelGroup.rotation.x = _currentPointer.y * 0.45;
      modelGroup.rotation.z = -_currentPointer.x * 0.35;

      // Inner core counter-rotation
      innerMesh.rotation.y -= delta * 0.2 * effectiveSpeed;
      innerMesh.rotation.x += delta * 0.15 * effectiveSpeed;

      // Orbiting rings
      ringMesh1.rotation.z += delta * 0.4 * effectiveSpeed;
      ringMesh2.rotation.z -= delta * 0.3 * effectiveSpeed;

      // Satellite position updates
      for (let i = 0; i < satellites.length; i++) {
        const angle = time * 0.8 * effectiveSpeed + (i * Math.PI * 2) / satellites.length;
        const radius = i % 2 === 0 ? 2.6 : 3.0;
        satellites[i].position.set(
          Math.cos(angle) * radius,
          Math.sin(angle * 1.5) * 0.6,
          Math.sin(angle) * radius
        );
      }

      // Constellation slow drift
      particles.rotation.y = time * 0.05 * effectiveSpeed;
      particles.rotation.x = _currentPointer.y * 0.15;

      // Apply wireframe toggle dynamically
      wireframeMat.wireframe = true;
      innerMat.wireframe = wireframeRef.current;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(tick);
    };

    tick();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      if (interactive) {
        window.removeEventListener('mousemove', handlePointerMove);
        container.removeEventListener('touchmove', handleTouchMove);
      }
      outerIcosaGeom.dispose();
      innerGeom.dispose();
      wireframeMat.dispose();
      innerMat.dispose();
      ringGeom1.dispose();
      ringGeom2.dispose();
      ringMat1.dispose();
      ringMat2.dispose();
      nodeGeom.dispose();
      nodeMat.dispose();
      particleGeom.dispose();
      particleMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement) {
        renderer.domElement.parentElement.removeChild(renderer.domElement);
      }
    };
  }, [interactive]);

  return (
    <div className="relative w-full h-full min-h-[420px] md:min-h-[520px] flex items-center justify-center">
      {/* 3D WebGL Canvas Container */}
      <div
        ref={mountRef}
        className="w-full h-full absolute inset-0 cursor-grab active:cursor-grabbing"
        title="Interactive 3D Core: Drag or move mouse to interact"
      />

      {/* Subtle Bottom Dock for 3D Customization without occluding the center */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-300 dark:border-slate-700/60 text-xs text-slate-700 dark:text-slate-300 shadow-xl backdrop-blur-md">
        <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 font-semibold">3D Interactive Core</span>
        <span className="text-slate-400 dark:text-slate-600">·</span>
        <button
          onClick={() => setWireframeMode(!wireframeMode)}
          className={`px-2 py-0.5 rounded text-[11px] transition-colors ${
            wireframeMode ? 'bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 font-semibold' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
          }`}
          title="Toggle wireframe mode"
        >
          {wireframeMode ? 'Solid View' : 'Wireframe'}
        </button>
        <span className="text-slate-400 dark:text-slate-600">·</span>
        <button
          onClick={() => setRotationSpeed(speed => (speed === 1 ? 2 : speed === 2 ? 0.3 : 1))}
          className="px-2 py-0.5 rounded text-[11px] text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
          title="Cycle rotation speed"
        >
          Speed: {rotationSpeed === 1 ? '1x' : rotationSpeed === 2 ? '2x' : '0.3x'}
        </button>
      </div>
    </div>
  );
}
