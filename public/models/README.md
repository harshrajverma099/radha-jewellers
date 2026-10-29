# 3D Jewellery Models Directory

This directory hosts optional `.glb` (binary glTF) and `.gltf` 3D models for Radha Jewellers' interactive 3D showcase.

## Included / Pre-configured Models

The website is pre-configured with 3 high-detail luxury jewellery items:

1. **Royal Solitaire Gold Ring** (`/models/royal-solitaire-ring.glb`)
2. **Heritage Temple Gold Kada** (`/models/temple-gold-kada.glb`)
3. **Auspicious Kundan & Pearl Pendant** (`/models/kundan-pearl-pendant.glb`)

> **Note on Automatic Fallback**: If an external `.glb` file is not present at the configured path, the 3D viewer automatically activates an engineered, high-precision procedural 3D model in Three.js with realistic metallic gold PBR reflection and refractive gemstones. The site never displays a broken view.

## How to Add Your Own 3D Models

1. Export your 3D jewellery model from Blender, Rhino, MatrixGold, or 3ds Max as a `.glb` file.
2. Optimize the file:
   - Target size: under 5MB.
   - Recommended polygon count: 20,000 – 60,000 triangles.
   - Use standard glTF metallic-roughness PBR materials for gold and gemstones.
3. Place your file in this directory (e.g. `public/models/my-custom-ring.glb`).
4. Register your model in `src/data/models3d.ts`:
   ```typescript
   {
     id: "my-custom-ring",
     name: "Custom Heritage Diamond Ring",
     category: "Rings & Bands",
     previewImage: "/images/collections/rings.jpg",
     modelPath: "/models/my-custom-ring.glb",
     proceduralType: "solitaire-ring",
     description: "Detailed description of the piece...",
     metalType: "22K Gold",
     gemstone: "Diamond Solitaire",
     whatsappMessage: "Hello Radha Jewellers, I would like to enquire about this 3D model.",
     status: "ready",
   }
   ```

