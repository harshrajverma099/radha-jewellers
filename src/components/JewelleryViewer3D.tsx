import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import {
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Play,
  Pause,
  MessageCircle,
  Sparkles,
  Maximize2,
  Minimize2,
  Info,
  Sun,
  Moon,
  Layers
} from 'lucide-react';
import { JewelleryModel3D, models3dData } from '../data/models3d';
import { getWhatsAppUrl, trackEvent } from '../data/siteConfig';

interface JewelleryViewer3DProps {
  initialModelId?: string;
  onModelSelect?: (model: JewelleryModel3D) => void;
}

export const JewelleryViewer3D: React.FC<JewelleryViewer3DProps> = ({
  initialModelId,
  onModelSelect,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [selectedModel, setSelectedModel] = useState<JewelleryModel3D>(() => {
    const found = models3dData.find((m) => m.id === initialModelId);
    return found || models3dData[0];
  });

  const [isLoading, setIsLoading] = useState(true);
  const [hasWebGLError, setHasWebGLError] = useState(false);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [lightingPreset, setLightingPreset] = useState<'warm' | 'emerald' | 'studio'>('warm');

  // References to keep Three.js instances stable
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const currentMeshGroupRef = useRef<THREE.Group | null>(null);
  const animFrameIdRef = useRef<number | null>(null);
  const lightsGroupRef = useRef<THREE.Group | null>(null);

  // Setup Three.js Materials
  const materialsRef = useRef<{
    gold: THREE.MeshStandardMaterial;
    antiqueGold: THREE.MeshStandardMaterial;
    diamond: THREE.MeshPhysicalMaterial;
    ruby: THREE.MeshPhysicalMaterial;
    emerald: THREE.MeshPhysicalMaterial;
    pearl: THREE.MeshStandardMaterial;
  }>({
    gold: new THREE.MeshStandardMaterial({
      color: 0xD4AF37,
      metalness: 0.94,
      roughness: 0.18,
      envMapIntensity: 1.5,
    }),
    antiqueGold: new THREE.MeshStandardMaterial({
      color: 0xC6A15B,
      metalness: 0.88,
      roughness: 0.28,
      envMapIntensity: 1.2,
    }),
    diamond: new THREE.MeshPhysicalMaterial({
      color: 0xFFFFFF,
      metalness: 0.05,
      roughness: 0.04,
      transmission: 0.88,
      ior: 2.417,
      thickness: 1.2,
      specularIntensity: 1.5,
      transparent: true,
      opacity: 0.92,
    }),
    ruby: new THREE.MeshPhysicalMaterial({
      color: 0x9B111E,
      metalness: 0.1,
      roughness: 0.08,
      transmission: 0.75,
      ior: 1.76,
      transparent: true,
      opacity: 0.9,
    }),
    emerald: new THREE.MeshPhysicalMaterial({
      color: 0x123D32,
      metalness: 0.1,
      roughness: 0.1,
      transmission: 0.82,
      ior: 1.58,
      transparent: true,
      opacity: 0.9,
    }),
    pearl: new THREE.MeshStandardMaterial({
      color: 0xFDFCF7,
      metalness: 0.15,
      roughness: 0.35,
      envMapIntensity: 0.8,
    }),
  });

  // Procedural 3D Model Builders
  const buildProceduralModel = useCallback((type: JewelleryModel3D['proceduralType']): THREE.Group => {
    const group = new THREE.Group();
    const mats = materialsRef.current;

    if (type === 'solitaire-ring') {
      // 1. Ring Band (Tapered comfort-fit torus)
      const bandGeometry = new THREE.TorusGeometry(1.4, 0.22, 32, 100);
      const band = new THREE.Mesh(bandGeometry, mats.gold);
      band.rotation.x = Math.PI / 2;
      group.add(band);

      // 2. Crown Gallery Base
      const galleryGeo = new THREE.TorusGeometry(0.5, 0.07, 16, 40);
      const gallery = new THREE.Mesh(galleryGeo, mats.gold);
      gallery.position.y = 1.48;
      gallery.rotation.x = Math.PI / 2;
      group.add(gallery);

      // 3. Four Royal Prongs
      const prongGeo = new THREE.CylinderGeometry(0.05, 0.07, 0.75, 16);
      const prongAngles = [Math.PI / 4, (3 * Math.PI) / 4, (5 * Math.PI) / 4, (7 * Math.PI) / 4];
      prongAngles.forEach((angle) => {
        const prong = new THREE.Mesh(prongGeo, mats.gold);
        const radius = 0.42;
        prong.position.x = Math.cos(angle) * radius;
        prong.position.z = Math.sin(angle) * radius;
        prong.position.y = 1.78;
        prong.rotation.z = -Math.cos(angle) * 0.15;
        prong.rotation.x = Math.sin(angle) * 0.15;
        group.add(prong);
      });

      // 4. Center Solitaire Diamond (Faceted Brilliant Cut)
      const diamondTopGeo = new THREE.ConeGeometry(0.52, 0.38, 16);
      const diamondTop = new THREE.Mesh(diamondTopGeo, mats.diamond);
      diamondTop.position.y = 1.95;
      diamondTop.rotation.x = Math.PI; // Table facet facing up
      group.add(diamondTop);

      const diamondPavilionGeo = new THREE.ConeGeometry(0.52, 0.55, 16);
      const diamondPavilion = new THREE.Mesh(diamondPavilionGeo, mats.diamond);
      diamondPavilion.position.y = 1.62;
      group.add(diamondPavilion);

      // 5. Shoulder Pave Accent Stones
      [-0.35, -0.58, 0.35, 0.58].forEach((pos, idx) => {
        const stoneGeo = new THREE.SphereGeometry(0.08, 12, 12);
        const stone = new THREE.Mesh(stoneGeo, mats.diamond);
        stone.position.x = pos;
        stone.position.y = 1.25 - idx * 0.08;
        stone.position.z = 0;
        group.add(stone);
      });

      // Center the whole ring composition
      group.position.y = -0.7;
    } else if (type === 'temple-kada') {
      // 1. Broad Traditional Kada Ring
      const kadaGeo = new THREE.TorusGeometry(1.4, 0.28, 32, 100);
      const kada = new THREE.Mesh(kadaGeo, mats.antiqueGold);
      kada.rotation.x = Math.PI / 2;
      group.add(kada);

      // 2. Embossed Relief Ribs / Fluting along circumference
      const ribCount = 36;
      for (let i = 0; i < ribCount; i++) {
        const angle = (i / ribCount) * Math.PI * 2;
        const ribGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.36, 12);
        const rib = new THREE.Mesh(ribGeo, mats.gold);
        const r = 1.66;
        rib.position.x = Math.cos(angle) * r;
        rib.position.z = Math.sin(angle) * r;
        rib.rotation.y = -angle;
        group.add(rib);
      }

      // 3. Two Outer Beaded Borders
      [-0.2, 0.2].forEach((yOffset) => {
        const beadBorder = new THREE.TorusGeometry(1.58, 0.05, 16, 60);
        const borderMesh = new THREE.Mesh(beadBorder, mats.gold);
        borderMesh.position.y = yOffset;
        borderMesh.rotation.x = Math.PI / 2;
        group.add(borderMesh);
      });

      // 4. Auspicious Temple Floral Gem Cabochons
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const gemGeo = new THREE.SphereGeometry(0.14, 16, 16);
        const gem = new THREE.Mesh(gemGeo, i % 2 === 0 ? mats.ruby : mats.emerald);
        const r = 1.44;
        gem.position.x = Math.cos(angle) * r;
        gem.position.z = Math.sin(angle) * r;
        gem.position.y = 0.26;
        group.add(gem);
      }

      group.rotation.x = Math.PI / 4.5;
      group.position.y = 0;
    } else if (type === 'kundan-pendant') {
      // 1. Top Bail Ring for chain
      const bailGeo = new THREE.TorusGeometry(0.3, 0.07, 16, 32);
      const bail = new THREE.Mesh(bailGeo, mats.gold);
      bail.position.y = 1.8;
      group.add(bail);

      // 2. Ornate Central Medallion Base
      const baseGeo = new THREE.CylinderGeometry(1.0, 1.05, 0.14, 32);
      const base = new THREE.Mesh(baseGeo, mats.gold);
      base.rotation.x = Math.PI / 2;
      group.add(base);

      // 3. Central Kundan Emerald Oval
      const centerGemGeo = new THREE.CylinderGeometry(0.38, 0.38, 0.22, 24);
      const centerGem = new THREE.Mesh(centerGemGeo, mats.emerald);
      centerGem.position.z = 0.09;
      centerGem.rotation.x = Math.PI / 2;
      group.add(centerGem);

      // 4. Surrounding Gold Petals with Polki Diamonds
      const petalCount = 8;
      for (let i = 0; i < petalCount; i++) {
        const angle = (i / petalCount) * Math.PI * 2;
        const r = 0.72;

        // Gold Bezel Petal
        const petalGeo = new THREE.CylinderGeometry(0.2, 0.24, 0.16, 16);
        const petal = new THREE.Mesh(petalGeo, mats.gold);
        petal.position.x = Math.cos(angle) * r;
        petal.position.y = Math.sin(angle) * r;
        petal.position.z = 0.04;
        petal.rotation.x = Math.PI / 2;
        group.add(petal);

        // Inset Polki Glass Gem
        const polkiGeo = new THREE.SphereGeometry(0.15, 12, 12);
        const polki = new THREE.Mesh(polkiGeo, mats.diamond);
        polki.position.x = Math.cos(angle) * r;
        polki.position.y = Math.sin(angle) * r;
        polki.position.z = 0.12;
        polki.scale.z = 0.4;
        group.add(polki);
      }

      // 5. Hanging South Sea Pearl Drop
      const pearlDropGeo = new THREE.SphereGeometry(0.36, 24, 24);
      const pearl = new THREE.Mesh(pearlDropGeo, mats.pearl);
      pearl.position.y = -1.5;
      pearl.scale.y = 1.3; // Elegant teardrop elongation
      group.add(pearl);

      // Pearl connector cap
      const capGeo = new THREE.ConeGeometry(0.18, 0.25, 16);
      const cap = new THREE.Mesh(capGeo, mats.gold);
      cap.position.y = -1.15;
      group.add(cap);

      group.position.y = 0.1;
    }

    return group;
  }, []);

  // Update Studio Lights
  const updateLights = useCallback((preset: 'warm' | 'emerald' | 'studio') => {
    if (!lightsGroupRef.current) return;
    const group = lightsGroupRef.current;

    // Clear existing lights
    while (group.children.length > 0) {
      group.remove(group.children[0]);
    }

    let ambientColor = 0xFFF9EE;
    let ambientIntensity = 0.8;
    let keyColor = 0xFFE8C3;
    let fillColor = 0xDDF0EA;

    if (preset === 'warm') {
      ambientColor = 0xFFF4DE;
      ambientIntensity = 1.0;
      keyColor = 0xFFDC96;
      fillColor = 0xEAD8B5;
    } else if (preset === 'emerald') {
      ambientColor = 0xD5EAE3;
      ambientIntensity = 0.7;
      keyColor = 0xFFE0A0;
      fillColor = 0x246252;
    } else if (preset === 'studio') {
      ambientColor = 0xFFFFFF;
      ambientIntensity = 0.9;
      keyColor = 0xFFFFFF;
      fillColor = 0xE0E0E0;
    }

    const ambientLight = new THREE.AmbientLight(ambientColor, ambientIntensity);
    group.add(ambientLight);

    // Key Light
    const keyLight = new THREE.DirectionalLight(keyColor, 2.2);
    keyLight.position.set(5, 8, 6);
    group.add(keyLight);

    // Fill Light
    const fillLight = new THREE.DirectionalLight(fillColor, 1.4);
    fillLight.position.set(-6, -2, -4);
    group.add(fillLight);

    // Rim / Backlight for glistening gold highlights
    const rimLight = new THREE.DirectionalLight(0xFFFFFF, 1.6);
    rimLight.position.set(0, 7, -6);
    group.add(rimLight);

    // Soft Bottom Bounce Light
    const bounceLight = new THREE.DirectionalLight(0xD4AF37, 0.6);
    bounceLight.position.set(0, -6, 2);
    group.add(bounceLight);
  }, []);

  // Load Model or Procedural Fallback
  const loadActiveModel = useCallback(async (model: JewelleryModel3D) => {
    if (!sceneRef.current) return;
    setIsLoading(true);

    // Completely remove any previous non-light model groups from scene
    const toRemove: THREE.Object3D[] = [];
    sceneRef.current.children.forEach((child) => {
      if (child !== lightsGroupRef.current) {
        toRemove.push(child);
      }
    });
    toRemove.forEach((child) => sceneRef.current?.remove(child));
    currentMeshGroupRef.current = null;

    let loadedSuccessfully = false;

    // Try loading external GLB if configured
    if (model.modelPath) {
      try {
        const loader = new GLTFLoader();
        const gltf = await new Promise<THREE.Group>((resolve, reject) => {
          loader.load(
            model.modelPath!,
            (data) => resolve(data.scene),
            undefined,
            (error) => reject(error)
          );
        });

        if (gltf) {
          // Normalize scale and center
          const box = new THREE.Box3().setFromObject(gltf);
          const size = box.getSize(new THREE.Vector3());
          const maxDim = Math.max(size.x, size.y, size.z);
          if (maxDim > 0) {
            const scale = 3.2 / maxDim;
            gltf.scale.set(scale, scale, scale);
          }
          const center = box.getCenter(new THREE.Vector3());
          gltf.position.sub(center.multiplyScalar(3.2 / maxDim));

          currentMeshGroupRef.current = gltf;
          sceneRef.current.add(gltf);
          loadedSuccessfully = true;
        }
      } catch (err) {
        // Fallback to high-quality procedural representation gracefully
        console.warn(`External 3D asset ${model.modelPath} not found. Engaging luxury procedural rendering for ${model.name}.`);
      }
    }

    // Procedural Fallback
    if (!loadedSuccessfully) {
      const proceduralGroup = buildProceduralModel(model.proceduralType);
      currentMeshGroupRef.current = proceduralGroup;
      sceneRef.current.add(proceduralGroup);
    }

    setIsLoading(false);
  }, [buildProceduralModel]);

  // Initialize Three.js Scene
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    try {
      // 1. Scene
      const scene = new THREE.Scene();
      sceneRef.current = scene;

      // 2. Camera
      const width = container.clientWidth || 600;
      const height = container.clientHeight || 500;
      const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
      camera.position.set(0, 1.2, 5.8);

      // 3. Renderer with antialiasing & physical tone mapping
      const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.15;
      rendererRef.current = renderer;

      // 4. Lights Group
      const lightsGroup = new THREE.Group();
      scene.add(lightsGroup);
      lightsGroupRef.current = lightsGroup;
      updateLights(lightingPreset);

      // 5. Controls
      const controls = new OrbitControls(camera, canvas);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.autoRotate = isAutoRotating;
      controls.autoRotateSpeed = 1.2;
      controls.minDistance = 3.2;
      controls.maxDistance = 9.0;
      controls.maxPolarAngle = Math.PI / 1.75;
      controls.minPolarAngle = Math.PI / 6;
      controlsRef.current = controls;

      // 6. Animation Loop with Visibility Optimization
      let isVisible = true;
      const observer = new IntersectionObserver(([entry]) => {
        isVisible = entry.isIntersecting;
      }, { threshold: 0.1 });
      observer.observe(container);

      const animate = () => {
        animFrameIdRef.current = requestAnimationFrame(animate);
        if (!isVisible) return; // Save GPU cycles when scrolled away!
        controls.update();
        renderer.render(scene, camera);
      };
      animate();

      // 7. Responsive Resize Handler
      const handleResize = () => {
        if (!containerRef.current || !rendererRef.current) return;
        const w = containerRef.current.clientWidth;
        const h = containerRef.current.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        rendererRef.current.setSize(w, h);
      };
      window.addEventListener('resize', handleResize);

      // Load initial selected model
      loadActiveModel(selectedModel);

      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
        observer.disconnect();
        if (animFrameIdRef.current) {
          cancelAnimationFrame(animFrameIdRef.current);
        }
        renderer.dispose();
      };
    } catch (e) {
      console.error('WebGL initialization failed:', e);
      setHasWebGLError(true);
      setIsLoading(false);
    }
  }, []);

  // Watch for selected model changes
  useEffect(() => {
    loadActiveModel(selectedModel);
  }, [selectedModel, loadActiveModel]);

  // Watch for lighting preset changes
  useEffect(() => {
    updateLights(lightingPreset);
  }, [lightingPreset, updateLights]);

  // Watch for auto-rotation toggle
  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = isAutoRotating;
    }
  }, [isAutoRotating]);

  // Keyboard navigation & controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!controlsRef.current) return;

      if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault();
        setIsAutoRotating((prev) => !prev);
      } else if (e.key === 'r' || e.key === 'R') {
        controlsRef.current.reset();
      } else if (e.key === '+' || e.key === '=') {
        const cam = controlsRef.current.object;
        cam.position.multiplyScalar(0.9);
      } else if (e.key === '-' || e.key === '_') {
        const cam = controlsRef.current.object;
        cam.position.multiplyScalar(1.1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // UI Handlers
  const handleResetView = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  const handleZoom = (direction: 'in' | 'out') => {
    if (controlsRef.current) {
      const cam = controlsRef.current.object;
      const factor = direction === 'in' ? 0.85 : 1.15;
      cam.position.multiplyScalar(factor);
    }
  };

  const handleSelectModel = (model: JewelleryModel3D) => {
    setSelectedModel(model);
    if (onModelSelect) onModelSelect(model);
    trackEvent('3d_model_switch', { model: model.name });
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full rounded-3xl overflow-hidden bg-gradient-to-b from-emerald-dark via-emerald-accent to-emerald-dark border-2 border-gold/40 shadow-luxurydark transition-all ${
        isFullscreen ? 'fixed inset-0 z-50 rounded-none h-screen' : 'h-[520px] sm:h-[620px] md:h-[680px]'
      }`}
      role="region"
      aria-label="Interactive 3D Jewellery Viewer"
    >
      {/* Decorative Traditional Border Watermark */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#C6A15B_1px,transparent_1px)] [background-size:28px_28px]" />

      {/* Top Header Badge & Model Category */}
      <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20 flex flex-col gap-1 pointer-events-none">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-gold/40 text-gold-light text-xs uppercase tracking-widestluxury font-medium shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-gold animate-spin" />
          <span>REAL-TIME 3D SHOWCASE</span>
        </div>
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-ivory drop-shadow-md">
          {selectedModel.name}
        </h3>
        <p className="text-xs text-beige/80 tracking-wide font-light">
          {selectedModel.metalType} • {selectedModel.gemstone}
        </p>
      </div>

      {/* Top Right Controls: Lighting, Fullscreen, Reset */}
      <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20 flex items-center gap-2">
        {/* Lighting Atmosphere Toggle */}
        <div className="flex items-center bg-black/50 backdrop-blur-md p-1 rounded-full border border-white/15">
          <button
            onClick={() => setLightingPreset('warm')}
            className={`p-1.5 rounded-full text-xs transition-colors ${
              lightingPreset === 'warm' ? 'bg-gold text-white' : 'text-beige/70 hover:text-ivory'
            }`}
            title="Warm Candlelight Studio"
            aria-label="Set warm golden studio lighting"
          >
            <Sun className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setLightingPreset('emerald')}
            className={`p-1.5 rounded-full text-xs transition-colors ${
              lightingPreset === 'emerald' ? 'bg-gold text-white' : 'text-beige/70 hover:text-ivory'
            }`}
            title="Royal Emerald Atmosphere"
            aria-label="Set royal emerald lighting"
          >
            <Moon className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setLightingPreset('studio')}
            className={`p-1.5 rounded-full text-xs transition-colors ${
              lightingPreset === 'studio' ? 'bg-gold text-white' : 'text-beige/70 hover:text-ivory'
            }`}
            title="Crisp Daylight Studio"
            aria-label="Set bright daylight studio lighting"
          >
            <Layers className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Fullscreen Toggle */}
        <button
          onClick={() => setIsFullscreen(!isFullscreen)}
          className="p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-ivory hover:text-gold hover:border-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
          title={isFullscreen ? 'Exit Fullscreen' : 'View Fullscreen'}
          aria-label={isFullscreen ? 'Exit Fullscreen' : 'View Fullscreen'}
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>

      {/* Center 3D Canvas / WebGL */}
      {!hasWebGLError ? (
        <canvas
          ref={canvasRef}
          className="w-full h-full cursor-grab active:cursor-grabbing touch-none block"
          tabIndex={0}
          aria-label="3D model interactive canvas. Drag to rotate, pinch or scroll to zoom."
        />
      ) : (
        /* Fallback if WebGL unavailable */
        <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center text-ivory">
          <img
            src={selectedModel.previewImage}
            alt={selectedModel.name}
            className="w-56 h-56 object-cover rounded-2xl border border-gold/40 shadow-luxury mb-4"
          />
          <h4 className="font-serif text-2xl font-bold mb-2">{selectedModel.name}</h4>
          <p className="text-sm text-beige/80 max-w-md mb-6">{selectedModel.description}</p>
          <a
            href={getWhatsAppUrl(selectedModel.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-white text-xs uppercase font-semibold"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      )}

      {/* Loading Shimmer Overlay */}
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-emerald-dark/80 backdrop-blur-sm z-30 pointer-events-none">
          <div className="w-12 h-12 rounded-full border-2 border-gold/30 border-t-gold animate-spin mb-4" />
          <p className="text-xs uppercase tracking-widestluxury text-gold-light font-medium">
            REFINING 3D GOLD & GEMSTONES...
          </p>
        </div>
      )}

      {/* Floating Left Controls: Zoom & Reset */}
      <div className="absolute bottom-24 sm:bottom-28 left-4 sm:left-6 z-20 flex flex-col gap-2">
        <button
          onClick={() => handleZoom('in')}
          className="p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-ivory hover:text-gold hover:border-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold shadow-md"
          title="Zoom In (+)"
          aria-label="Zoom in on 3D jewellery model"
        >
          <ZoomIn className="w-4 h-4" />
        </button>

        <button
          onClick={() => handleZoom('out')}
          className="p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-ivory hover:text-gold hover:border-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold shadow-md"
          title="Zoom Out (-)"
          aria-label="Zoom out on 3D jewellery model"
        >
          <ZoomOut className="w-4 h-4" />
        </button>

        <button
          onClick={handleResetView}
          className="p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-ivory hover:text-gold hover:border-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold shadow-md"
          title="Reset View (R)"
          aria-label="Reset 3D camera angle to default"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        <button
          onClick={() => setIsAutoRotating(!isAutoRotating)}
          className={`p-2.5 rounded-full backdrop-blur-md border transition-colors focus:outline-none focus:ring-2 focus:ring-gold shadow-md ${
            isAutoRotating
              ? 'bg-gold text-white border-gold'
              : 'bg-black/60 text-ivory border-white/20 hover:text-gold'
          }`}
          title={isAutoRotating ? 'Pause Rotation (Space)' : 'Resume Rotation (Space)'}
          aria-label={isAutoRotating ? 'Pause auto-rotation' : 'Resume auto-rotation'}
        >
          {isAutoRotating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
      </div>

      {/* Floating Center Interaction Guide */}
      <div className="absolute bottom-24 sm:bottom-28 right-4 sm:right-6 z-20 hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[11px] text-beige/80 pointer-events-none">
        <Info className="w-3.5 h-3.5 text-gold-light" />
        <span>Drag to rotate • Pinch/scroll to zoom • Press [R] to reset</span>
      </div>

      {/* Bottom Bar: Model Selector Pills & Direct WhatsApp CTA */}
      <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 z-20 flex flex-col sm:flex-row items-center justify-between gap-3 p-2 rounded-2xl bg-black/60 backdrop-blur-lg border border-white/15">
        {/* Model Switcher Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto max-w-full py-1">
          {models3dData.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSelectModel(item)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-gold ${
                selectedModel.id === item.id
                  ? 'bg-gold text-white shadow-goldglow font-semibold'
                  : 'bg-white/10 text-ivory hover:bg-white/20 hover:text-gold-light'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              <span>{item.name}</span>
            </button>
          ))}
        </div>

        {/* WhatsApp Action */}
        <a
          href={getWhatsAppUrl(selectedModel.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('3d_enquire_whatsapp', { model: selectedModel.name })}
          className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-xl bg-gold hover:bg-gold-dark text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-sm w-full sm:w-auto"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Enquire on WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
