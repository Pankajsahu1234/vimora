import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import {
  RotateCcw,
  Sparkles,
  Maximize2,
  Minimize2,
  ChevronDown,
  ChevronUp,
  Layers,
  Scale,
  Eye,
} from 'lucide-react';
import { MakhanaGradeId, MakhanaVariety } from '../types';

interface Makhana3DViewerProps {
  onSelectGradeForQuote?: (gradeId: MakhanaGradeId, variety: MakhanaVariety) => void;
}

// Scratch vectors for render loop
const _targetScale = new THREE.Vector3(1, 1, 1);
const _currentScale = new THREE.Vector3(1, 1, 1);

// Procedural Organic Makhana Starch Color Map (Ivory, Pores, Micro-specks & Toasted Highlights)
function createMakhanaColorTexture(isHandPicked: boolean, isRoasted: boolean): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    // 1. Base Natural Starch Color
    // Raw: Natural warm ivory cream; Roasted: Warm toasted golden cream
    const baseGradient = ctx.createRadialGradient(512, 512, 50, 512, 512, 600);
    if (isRoasted) {
      baseGradient.addColorStop(0, '#FFFBF2');
      baseGradient.addColorStop(0.5, '#F7ECD5');
      baseGradient.addColorStop(0.85, '#EBD8B2');
      baseGradient.addColorStop(1, '#DFBF82');
    } else {
      baseGradient.addColorStop(0, '#FFFFFF');
      baseGradient.addColorStop(0.5, '#FCFAF4');
      baseGradient.addColorStop(0.85, '#F6EFE2');
      baseGradient.addColorStop(1, '#EDE3D1');
    }
    ctx.fillStyle = baseGradient;
    ctx.fillRect(0, 0, 1024, 1024);

    // 2. Micro-cellular porous starch texture (Thousands of fine popped starch pores)
    for (let i = 0; i < 9000; i++) {
      const x = Math.random() * 1024;
      const y = Math.random() * 1024;
      const r = 0.8 + Math.random() * 2.5;
      const alpha = 0.08 + Math.random() * 0.16;

      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = isRoasted
        ? `rgba(180, 130, 60, ${alpha * 0.8})`
        : `rgba(160, 145, 125, ${alpha * 0.6})`;
      ctx.fill();

      // Inner starchy bright spot for aerated cellular feel
      if (r > 1.8) {
        ctx.beginPath();
        ctx.arc(x - 0.5, y - 0.5, r * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.fill();
      }
    }

    // 3. Delicate organic starch expansion folds / soft fissures
    for (let j = 0; j < 40; j++) {
      ctx.beginPath();
      let cx = Math.random() * 1024;
      let cy = Math.random() * 1024;
      ctx.moveTo(cx, cy);
      const segments = 4 + Math.floor(Math.random() * 5);
      for (let s = 0; s < segments; s++) {
        cx += (Math.random() - 0.5) * 80;
        cy += (Math.random() - 0.5) * 80;
        ctx.lineTo(cx, cy);
      }
      ctx.strokeStyle = isRoasted ? 'rgba(150, 105, 50, 0.22)' : 'rgba(175, 160, 140, 0.2)';
      ctx.lineWidth = 1.2 + Math.random() * 2.0;
      ctx.stroke();
    }

    // 4. Subtle Toasted Highlights along ridge regions if Micro-Roasted
    if (isRoasted) {
      for (let k = 0; k < 25; k++) {
        const rx = Math.random() * 1024;
        const ry = Math.random() * 1024;
        const rad = 30 + Math.random() * 70;
        const toastGrad = ctx.createRadialGradient(rx, ry, 5, rx, ry, rad);
        toastGrad.addColorStop(0, 'rgba(200, 140, 60, 0.28)');
        toastGrad.addColorStop(0.7, 'rgba(225, 175, 95, 0.12)');
        toastGrad.addColorStop(1, 'rgba(240, 210, 150, 0)');
        ctx.fillStyle = toastGrad;
        ctx.beginPath();
        ctx.arc(rx, ry, rad, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // 5. Natural Gorgon Nut Seed Specks (Only on Normal variety; Hand-Picked is 100% spotless)
    if (!isHandPicked) {
      for (let f = 0; f < 65; f++) {
        const fx = Math.random() * 1024;
        const fy = Math.random() * 1024;
        const fSize = 1.0 + Math.random() * 3.5;
        ctx.beginPath();
        ctx.arc(fx, fy, fSize, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(45, 25, 14, 0.75)'; // Dark roasted seed-coat membrane
        ctx.fill();

        // Soft halo around speck
        ctx.beginPath();
        ctx.arc(fx, fy, fSize * 1.8, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(75, 45, 25, 0.25)';
        ctx.fill();
      }
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2, 2);
  return texture;
}

// Procedural Makhana Micro-Porous Bump Texture
function createMakhanaBumpTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.fillStyle = '#808080';
    ctx.fillRect(0, 0, 1024, 1024);

    // Fine microscopic sponge cellular pore noise
    for (let i = 0; i < 12000; i++) {
      const x = Math.random() * 1024;
      const y = Math.random() * 1024;
      const r = 1 + Math.random() * 2.8;
      const val = Math.floor(Math.random() * 110 + 90);
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = `rgb(${val}, ${val}, ${val})`;
      ctx.fill();
    }

    // Fine starch fracture creases
    ctx.strokeStyle = 'rgba(40, 40, 40, 0.35)';
    ctx.lineWidth = 1.6;
    for (let j = 0; j < 50; j++) {
      ctx.beginPath();
      let cx = Math.random() * 1024;
      let cy = Math.random() * 1024;
      ctx.moveTo(cx, cy);
      for (let k = 0; k < 5; k++) {
        cx += (Math.random() - 0.5) * 60;
        cy += (Math.random() - 0.5) * 60;
        ctx.lineTo(cx, cy);
      }
      ctx.stroke();
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2, 2);
  return texture;
}

// Procedural Contact Shadow
function createRadialShadowTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const gradient = ctx.createRadialGradient(128, 128, 15, 128, 128, 120);
    gradient.addColorStop(0, 'rgba(17, 47, 32, 0.42)');
    gradient.addColorStop(0.35, 'rgba(17, 47, 32, 0.22)');
    gradient.addColorStop(0.7, 'rgba(17, 47, 32, 0.06)');
    gradient.addColorStop(1, 'rgba(17, 47, 32, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 256, 256);
  }
  return new THREE.CanvasTexture(canvas);
}

// Build Authentic Organic Popped Makhana Kernel Geometry
// Creates a natural, continuous, flower-puffed fox nut volume with organic bulbous mounds,
// natural creases, basal seed-coat pit, and micro-cellular surface
function createAuthenticMakhanaGeometry(): THREE.BufferGeometry {
  const geo = new THREE.IcosahedronGeometry(1.0, 5);
  const pos = geo.attributes.position;

  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);

    const len = Math.sqrt(x * x + y * y + z * z);
    const nx = x / len;
    const ny = y / len;
    const nz = z / len;

    // 1. Asymmetric multi-lobe expansion (popped starch starburst lobes)
    const l1 = Math.sin(nx * 2.8 + 0.35) * Math.cos(ny * 2.4 - 0.25) * Math.sin(nz * 2.6);
    const l2 = Math.cos(nx * 3.6 - 0.55) * Math.sin(ny * 3.2 + 0.45) * Math.cos(nz * 3.4);
    const l3 = Math.sin(nx * 4.8 + 1.2) * Math.cos(ny * 4.5) * Math.sin(nz * 4.2) * 0.4;

    let lobeExpansion = Math.max(0, l1 * 0.75 + l2 * 0.6 + l3 + 0.25);
    lobeExpansion = Math.pow(lobeExpansion, 1.45) * 0.52;

    // 2. Basal seed husk crater (bottom pole indentation where black Gorgon seed burst open)
    const distToHusk = Math.sqrt(nx * nx + (ny + 0.95) * (ny + 0.95) + nz * nz);
    const huskCrater = Math.max(0, 1.0 - distToHusk / 0.58);
    const craterIndent = -huskCrater * 0.36;

    // 3. Deep natural folds and valleys between the puffed lobes
    const cleft = -0.14 * Math.pow(Math.abs(Math.sin(nx * 3.2 + nz * 2.9)), 3.8);

    // 4. Subtle oblate puffiness (makhana kernels are slightly wider than tall)
    const squishY = 1.0 - 0.07 * ny * ny;

    // 5. Fine organic surface wobble
    const micro = (Math.sin(nx * 13.0) * Math.cos(ny * 12.0) + Math.sin(nz * 14.0)) * 0.022;

    const totalR = (1.0 + lobeExpansion + craterIndent + cleft + micro) * squishY;

    pos.setXYZ(i, nx * totalR, ny * totalR * 0.94, nz * totalR);
  }

  geo.computeVertexNormals();
  return geo;
}

// Secondary puffy lobule for organic asymmetry
function createSecondaryLobuleGeometry(scaleX = 1, scaleY = 1, scaleZ = 1): THREE.BufferGeometry {
  const geo = new THREE.IcosahedronGeometry(0.48, 4);
  const pos = geo.attributes.position;

  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);

    const len = Math.sqrt(x * x + y * y + z * z);
    const nx = x / len;
    const ny = y / len;
    const nz = z / len;

    const puff = (Math.sin(nx * 3.4) * Math.cos(ny * 3.0) + Math.sin(nz * 3.2)) * 0.12;
    const r = (1.0 + puff) * 0.48;

    pos.setXYZ(i, nx * r * scaleX, ny * r * scaleY, nz * r * scaleZ);
  }

  geo.computeVertexNormals();
  return geo;
}

// Real jagged dark seed-coat shell cup nestled in the bottom crater
function createBasalHuskGeometry(): THREE.BufferGeometry {
  const geo = new THREE.CylinderGeometry(0.24, 0.08, 0.18, 24);
  const pos = geo.attributes.position;

  // Make husk edges organic and jagged
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);
    const noise = Math.sin(x * 12.0) * Math.cos(z * 12.0) * 0.035;
    pos.setXYZ(i, x * (1 + noise), y, z * (1 + noise));
  }

  geo.computeVertexNormals();
  return geo;
}

// Grade millimeter physical scale map (normalized for 3D viewport)
const GRADE_SPECS: Record<MakhanaGradeId, { name: string; diameterMm: string; scale: number; countKg: string }> = {
  'grade-4': { name: 'Grade 4', diameterMm: '15.0 mm', scale: 0.72, countKg: '1,600 – 1,800 pcs' },
  'grade-4-plus': { name: 'Grade 4+', diameterMm: '17.2 mm', scale: 0.82, countKg: '1,400 – 1,550 pcs' },
  'grade-5': { name: 'Grade 5', diameterMm: '19.4 mm', scale: 0.94, countKg: '1,150 – 1,350 pcs' },
  'grade-5-plus': { name: 'Grade 5+', diameterMm: '21.5 mm', scale: 1.05, countKg: '950 – 1,100 pcs' },
  'grade-6-plus': { name: 'Grade 6+ (Jumbo)', diameterMm: '24.8 mm', scale: 1.22, countKg: '750 – 900 pcs' },
};

export const Makhana3DViewer: React.FC<Makhana3DViewerProps> = ({ onSelectGradeForQuote }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  // User State
  const [activeGrade, setActiveGrade] = useState<MakhanaGradeId>('grade-6-plus');
  const [activeVariety, setActiveVariety] = useState<MakhanaVariety>('Hand-Picked');
  const [roastProfile, setRoastProfile] = useState<'raw' | 'roasted'>('raw');
  const [isCrossSection, setIsCrossSection] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [isControlsCollapsed, setIsControlsCollapsed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // References for render loop
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const kernelGroupRef = useRef<THREE.Group | null>(null);
  const secondaryLobeRef = useRef<THREE.Mesh | null>(null);
  const innerCoreRef = useRef<THREE.Mesh | null>(null);
  const caliperRingRef = useRef<THREE.Mesh | null>(null);
  const kernelMaterialRef = useRef<THREE.MeshStandardMaterial | null>(null);
  const huskMaterialRef = useRef<THREE.MeshStandardMaterial | null>(null);
  const huskMeshRef = useRef<THREE.Mesh | null>(null);

  // Initialize Three.js Scene
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect software WebGL guard
    const isSoftwareGl = (() => {
      const probeCanvas = document.createElement('canvas');
      const gl = probeCanvas.getContext('webgl2') || probeCanvas.getContext('webgl');
      if (!gl) return true;
      const ext = gl.getExtension('WEBGL_debug_renderer_info');
      const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
      const gpu = String(gl.getParameter(param));
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
    })();

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color('#FAF8F5');
    scene.fog = new THREE.FogExp2('#FAF8F5', 0.032);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      40,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 1.6, 5.0);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
      alpha: false,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // Studio Environment Reflections
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = !isSoftwareGl;
    controls.dampingFactor = 0.06;
    controls.minDistance = 2.4;
    controls.maxDistance = 8.0;
    controls.maxPolarAngle = Math.PI / 2 + 0.15;
    controlsRef.current = controls;

    // Studio Lighting Rig
    const warmKeyLight = new THREE.DirectionalLight('#FFF9EE', 2.0);
    warmKeyLight.position.set(4.5, 6.0, 3.8);
    warmKeyLight.castShadow = !isSoftwareGl;
    warmKeyLight.shadow.mapSize.width = 1024;
    warmKeyLight.shadow.mapSize.height = 1024;
    warmKeyLight.shadow.bias = -0.0005;
    warmKeyLight.shadow.normalBias = 0.02;
    scene.add(warmKeyLight);

    const coolFillLight = new THREE.HemisphereLight('#FAF8F5', '#E3D7C5', 1.2);
    scene.add(coolFillLight);

    const warmRimLight = new THREE.DirectionalLight('#DFBE7A', 0.9);
    warmRimLight.position.set(-4.0, 3.2, -4.0);
    scene.add(warmRimLight);

    // Procedural Textures
    const colorTexture = createMakhanaColorTexture(activeVariety === 'Hand-Picked', roastProfile === 'roasted');
    const bumpTexture = createMakhanaBumpTexture();
    const shadowTexture = createRadialShadowTexture();

    // Contact Ground Shadow Plane
    const shadowGeo = new THREE.PlaneGeometry(3.8, 3.8);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTexture,
      transparent: true,
      depthWrite: false,
      opacity: 0.48,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -1.02;
    scene.add(shadowMesh);

    // ============================================================
    // NATURAL ORGANIC PHOOL MAKHANA KERNEL GROUP
    // ============================================================
    const kernelGroup = new THREE.Group();
    kernelGroupRef.current = kernelGroup;
    kernelGroup.position.y = 0;
    scene.add(kernelGroup);

    // Primary Popped Starch Material (Matte, Velvety, Fine cellular pores)
    const starchMat = new THREE.MeshStandardMaterial({
      map: colorTexture,
      bumpMap: bumpTexture,
      bumpScale: 0.045,
      roughness: 0.94, // Completely matte natural organic food surface
      metalness: 0.0,
      roughnessMap: bumpTexture,
    });
    kernelMaterialRef.current = starchMat;

    // Basal Seed Coat Shell Material (Rich dark umber with woody texture)
    const huskMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#22140D'),
      bumpMap: bumpTexture,
      bumpScale: 0.06,
      roughness: 0.72,
      metalness: 0.05,
    });
    huskMaterialRef.current = huskMat;

    // 1. Main Popped Starch Cloud Body (Flower starburst form)
    const mainMakhanaGeo = createAuthenticMakhanaGeometry();
    const mainMakhanaMesh = new THREE.Mesh(mainMakhanaGeo, starchMat);
    mainMakhanaMesh.castShadow = !isSoftwareGl;
    mainMakhanaMesh.receiveShadow = !isSoftwareGl;
    kernelGroup.add(mainMakhanaMesh);

    // 2. Secondary Puffy Lobule (Asymmetric natural pop eruption on the side)
    const subLobeGeo = createSecondaryLobuleGeometry(1.2, 0.95, 1.1);
    const subLobeMesh = new THREE.Mesh(subLobeGeo, starchMat);
    subLobeMesh.position.set(0.68, 0.35, 0.28);
    subLobeMesh.rotation.set(0.2, -0.4, 0.3);
    subLobeMesh.castShadow = !isSoftwareGl;
    kernelGroup.add(subLobeMesh);

    // 3. Top Crown Detachable Lobule (Explodes slightly during cross-section view)
    const crownLobeGeo = createSecondaryLobuleGeometry(1.05, 0.85, 1.15);
    const crownLobeMesh = new THREE.Mesh(crownLobeGeo, starchMat);
    crownLobeMesh.position.set(-0.15, 0.72, -0.22);
    crownLobeMesh.castShadow = !isSoftwareGl;
    secondaryLobeRef.current = crownLobeMesh;
    kernelGroup.add(crownLobeMesh);

    // 4. Authentic Basal Gorgon Nut Seed-Coat Shell Cup (Underneath in the pit)
    const huskGeo = createBasalHuskGeometry();
    const huskMesh = new THREE.Mesh(huskGeo, huskMat);
    huskMesh.position.set(0.04, -0.86, 0.06);
    huskMesh.rotation.set(0.25, 0.18, 0.35);
    huskMesh.castShadow = !isSoftwareGl;
    huskMeshRef.current = huskMesh;
    kernelGroup.add(huskMesh);

    // 5. Internal Aerated Honeycomb Core (Visible in Cross-Section mode)
    const innerGeo = new THREE.IcosahedronGeometry(0.68, 3);
    const innerMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#FFFBF0'),
      bumpMap: bumpTexture,
      bumpScale: 0.08,
      roughness: 0.98,
      metalness: 0.0,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    innerMesh.scale.set(0.001, 0.001, 0.001); // Hidden initially
    innerCoreRef.current = innerMesh;
    kernelGroup.add(innerMesh);

    // 6. Millimeter Precision Caliper Gauge Ring (Fine golden caliper)
    const caliperGeo = new THREE.TorusGeometry(1.28, 0.014, 16, 80);
    const caliperMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#B88E3E'),
      metalness: 0.88,
      roughness: 0.25,
      transparent: true,
      opacity: 0.8,
    });
    const caliperMesh = new THREE.Mesh(caliperGeo, caliperMat);
    caliperMesh.rotation.x = Math.PI / 2;
    caliperRingRef.current = caliperMesh;
    kernelGroup.add(caliperMesh);

    // Responsive Canvas Resize
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation & Pacing Loop
    let frameId = 0;
    const clock = new THREE.Clock();

    function tick() {
      const delta = clock.getDelta();

      // Gentle authentic auto-rotation
      if (autoRotate && kernelGroup) {
        kernelGroup.rotation.y += delta * 0.45;
      }

      // Smooth scale interpolation to match selected grade
      if (kernelGroup) {
        _currentScale.lerp(_targetScale, 0.08);
        kernelGroup.scale.copy(_currentScale);
      }

      // Smooth cross-section exploded view
      if (secondaryLobeRef.current && innerCoreRef.current) {
        const targetCrownY = isCrossSection ? 1.45 : 0.72;
        const targetCrownZ = isCrossSection ? -0.65 : -0.22;
        secondaryLobeRef.current.position.y += (targetCrownY - secondaryLobeRef.current.position.y) * 0.09;
        secondaryLobeRef.current.position.z += (targetCrownZ - secondaryLobeRef.current.position.z) * 0.09;

        const targetCoreScale = isCrossSection ? 0.92 : 0.001;
        innerCoreRef.current.scale.lerp(new THREE.Vector3(targetCoreScale, targetCoreScale, targetCoreScale), 0.09);
      }

      controls.update();
      renderer.render(scene, camera);

      frameId = requestAnimationFrame(tick);
    }

    frameId = requestAnimationFrame(tick);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);

      // Dispose Three.js resources
      mainMakhanaGeo.dispose();
      subLobeGeo.dispose();
      crownLobeGeo.dispose();
      huskGeo.dispose();
      innerGeo.dispose();
      caliperGeo.dispose();
      shadowGeo.dispose();

      starchMat.dispose();
      huskMat.dispose();
      innerMat.dispose();
      caliperMat.dispose();
      shadowMat.dispose();
      colorTexture.dispose();
      bumpTexture.dispose();
      shadowTexture.dispose();

      controls.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Update physical grade scaling smoothly
  useEffect(() => {
    const spec = GRADE_SPECS[activeGrade];
    if (spec) {
      _targetScale.set(spec.scale, spec.scale, spec.scale);
    }
  }, [activeGrade]);

  // Update authentic procedural makhana texture when variety or roast changes
  useEffect(() => {
    const isHandPicked = activeVariety === 'Hand-Picked';
    const isRoasted = roastProfile === 'roasted';

    if (kernelMaterialRef.current) {
      // Regenerate the procedural color map with authentic speckles or roasted highlights
      const newColorTex = createMakhanaColorTexture(isHandPicked, isRoasted);
      kernelMaterialRef.current.map?.dispose();
      kernelMaterialRef.current.map = newColorTex;
      kernelMaterialRef.current.needsUpdate = true;
    }

    if (huskMeshRef.current && huskMaterialRef.current) {
      // In Hand-Picked, the seed husk remnant is minimal and faint; in Normal it is prominent
      if (isHandPicked) {
        huskMeshRef.current.scale.set(0.65, 0.65, 0.65);
        huskMaterialRef.current.color.set('#3A2417');
      } else {
        huskMeshRef.current.scale.set(1.0, 1.0, 1.0);
        huskMaterialRef.current.color.set('#1A0F09');
      }
    }
  }, [activeVariety, roastProfile]);

  // Reset Camera View
  const handleResetCamera = () => {
    if (cameraRef.current && controlsRef.current) {
      cameraRef.current.position.set(0, 1.6, 5.0);
      controlsRef.current.target.set(0, 0, 0);
      controlsRef.current.update();
    }
  };

  const currentSpec = GRADE_SPECS[activeGrade];

  return (
    <section id="kernel-3d" className="py-12 sm:py-16 lg:py-20 bg-[#FAF8F5] border-t border-[#E8E1D5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 sm:pb-8 border-b border-[#E8E1D5]">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B88E3E]">
              Interactive 3D Kernel Calibrator
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#112F20] mt-2 tracking-tight">
              Natural Phool Makhana Inspection.
            </h2>
            <p className="text-sm sm:text-base text-[#46584C] mt-2.5">
              Inspect authentic physical millimeter grading of our Purnea harvest. Rotate, calibrate diameter scales from 15.0mm up to 24.8mm Jumbo Diamond, and inspect the natural popped starch texture and seed-coat cavity.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3 bg-[#F2EDE2] border border-[#DFD6C6] px-4 py-2.5 rounded-xl">
            <div className="w-8 h-8 rounded-lg bg-[#112F20] text-[#DFBE7A] flex items-center justify-center font-bold text-xs">
              3D
            </div>
            <div className="text-left text-xs">
              <div className="font-bold text-[#112F20]">PBR Organic Starch Rendering</div>
              <div className="text-[#687C70] text-[11px]">Natural Fissures &middot; Basal Husk &middot; Zero 404s</div>
            </div>
          </div>
        </div>

        {/* 3D Canvas Viewport Card */}
        <div
          className={`mt-8 rounded-2xl overflow-hidden border border-[#D8CFC0] bg-gradient-to-b from-[#FAF8F5] to-[#F3EDE2] shadow-xl relative transition-all duration-300 ${
            isFullscreen ? 'fixed inset-0 z-50 rounded-none bg-[#FAF8F5]' : ''
          }`}
        >
          {/* Top Overlay HUD Strip */}
          <div className="absolute top-3 left-3 right-3 sm:top-5 sm:left-5 sm:right-5 z-20 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
            
            {/* Left: Caliper Scale Badge */}
            <div className="pointer-events-auto flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#FAF8F5]/90 backdrop-blur-md border border-[#DCD3C3] shadow-xs text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span className="text-[#55675A]">Millimeter Diameter:</span>
              <span className="font-mono font-bold text-[#112F20]">{currentSpec.diameterMm}</span>
              <span className="text-[#A59987]">&middot;</span>
              <span className="font-mono text-[11px] text-[#697B70]">{currentSpec.countKg}</span>
            </div>

            {/* Right: Quick Action Buttons */}
            <div className="pointer-events-auto flex items-center gap-2">
              <button
                type="button"
                onClick={() => setAutoRotate(!autoRotate)}
                className={`p-2 rounded-lg border text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                  autoRotate
                    ? 'bg-[#112F20] text-white border-[#112F20]'
                    : 'bg-[#FAF8F5]/90 text-[#112F20] border-[#DCD3C3] hover:bg-white'
                }`}
                title="Toggle Auto-Rotation"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#DFBE7A]" />
                <span className="hidden sm:inline">Spin: {autoRotate ? 'ON' : 'OFF'}</span>
              </button>

              <button
                type="button"
                onClick={handleResetCamera}
                className="p-2 rounded-lg bg-[#FAF8F5]/90 border border-[#DCD3C3] text-[#112F20] hover:bg-white transition-colors"
                title="Reset Camera View"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-2 rounded-lg bg-[#FAF8F5]/90 border border-[#DCD3C3] text-[#112F20] hover:bg-white transition-colors"
                title="Toggle Fullscreen Mode"
              >
                {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* 3D Three.js Container */}
          <div
            ref={mountRef}
            className={`w-full relative cursor-grab active:cursor-grabbing ${
              isFullscreen ? 'h-screen' : 'h-[380px] sm:h-[460px] md:h-[520px]'
            }`}
          />

          {/* Interactive Inspection Bottom Dock (<= 15% Viewport footprint) */}
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-20 pointer-events-auto">
            <div className="bg-[#FAF8F5]/95 backdrop-blur-md rounded-xl border border-[#DCD2C2] shadow-lg p-3 sm:p-4 space-y-3">
              
              {/* Header of Dock with Collapse Toggle */}
              <div className="flex items-center justify-between gap-2 border-b border-[#EAE2D3] pb-2">
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#B88E3E]" />
                  <span className="text-xs font-bold text-[#112F20] uppercase tracking-wider">
                    Grade &amp; Finish Calibrator
                  </span>
                  <span className="hidden md:inline text-[11px] text-[#6B7D71]">
                    &middot; Drag to rotate, scroll to zoom
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsControlsCollapsed(!isControlsCollapsed)}
                    className="p-1 rounded text-[#5D6F63] hover:text-[#112F20] transition-colors"
                    title={isControlsCollapsed ? 'Expand Controls' : 'Minimize Controls'}
                  >
                    {isControlsCollapsed ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {!isControlsCollapsed && (
                <>
                  {/* Grade Selector Row */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                    {(Object.keys(GRADE_SPECS) as MakhanaGradeId[]).map((gId) => {
                      const spec = GRADE_SPECS[gId];
                      const isSelected = activeGrade === gId;
                      return (
                        <button
                          key={gId}
                          type="button"
                          onClick={() => setActiveGrade(gId)}
                          className={`p-2 rounded-lg text-left text-xs transition-all border ${
                            isSelected
                              ? 'bg-[#112F20] text-white border-[#112F20] shadow-xs'
                              : 'bg-white text-[#203426] border-[#DDD3C2] hover:bg-[#F7F2E9]'
                          }`}
                        >
                          <div className={`font-bold ${isSelected ? 'text-white' : 'text-[#112F20]'}`}>
                            {spec.name}
                          </div>
                          <div className={`text-[10px] font-mono ${isSelected ? 'text-[#DFBE7A]' : 'text-[#728377]'}`}>
                            {spec.diameterMm}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Secondary Toggles: Finish, Roast & Quote CTA */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
                    
                    {/* Left Toggles */}
                    <div className="flex flex-wrap items-center gap-2">
                      {/* Variety Finish Switcher */}
                      <div className="inline-flex p-0.5 bg-[#ECE5D7] rounded-lg border border-[#DDD3C2] text-xs">
                        <button
                          type="button"
                          onClick={() => setActiveVariety('Hand-Picked')}
                          className={`px-2.5 py-1 rounded-md font-semibold text-[11px] transition-all ${
                            activeVariety === 'Hand-Picked'
                              ? 'bg-[#112F20] text-white'
                              : 'text-[#485B50] hover:text-[#112F20]'
                          }`}
                        >
                          Spotless Hand-Picked
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveVariety('Normal')}
                          className={`px-2.5 py-1 rounded-md font-semibold text-[11px] transition-all ${
                            activeVariety === 'Normal'
                              ? 'bg-[#112F20] text-white'
                              : 'text-[#485B50] hover:text-[#112F20]'
                          }`}
                        >
                          Normal (Cleaned)
                        </button>
                      </div>

                      {/* Roast Profile Switcher */}
                      <div className="inline-flex p-0.5 bg-[#ECE5D7] rounded-lg border border-[#DDD3C2] text-xs">
                        <button
                          type="button"
                          onClick={() => setRoastProfile('raw')}
                          className={`px-2.5 py-1 rounded-md font-semibold text-[11px] transition-all ${
                            roastProfile === 'raw'
                              ? 'bg-[#112F20] text-white'
                              : 'text-[#485B50] hover:text-[#112F20]'
                          }`}
                        >
                          Raw Sun-Popped
                        </button>
                        <button
                          type="button"
                          onClick={() => setRoastProfile('roasted')}
                          className={`px-2.5 py-1 rounded-md font-semibold text-[11px] transition-all ${
                            roastProfile === 'roasted'
                              ? 'bg-[#112F20] text-white'
                              : 'text-[#485B50] hover:text-[#112F20]'
                          }`}
                        >
                          Micro-Roasted
                        </button>
                      </div>

                      {/* Cross-Section View */}
                      <button
                        type="button"
                        onClick={() => setIsCrossSection(!isCrossSection)}
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md border text-[11px] font-semibold transition-all ${
                          isCrossSection
                            ? 'bg-[#112F20] text-white border-[#112F20]'
                            : 'bg-white text-[#384C3F] border-[#DDD3C2] hover:bg-[#F5EFE5]'
                        }`}
                        title="Toggle Aerated Foam Core Inspection"
                      >
                        <Layers className="w-3 h-3 text-[#DFBE7A]" />
                        <span>Pore Aeration</span>
                      </button>
                    </div>

                    {/* Right Quote CTA */}
                    {onSelectGradeForQuote && (
                      <button
                        type="button"
                        onClick={() => onSelectGradeForQuote(activeGrade, activeVariety)}
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#112F20] hover:bg-[#1A4E33] text-white text-xs font-semibold rounded-md shadow-xs transition-colors shrink-0"
                      >
                        <span>Quote Inspected {currentSpec.name}</span>
                        <span className="text-[#DFBE7A]">&rarr;</span>
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
