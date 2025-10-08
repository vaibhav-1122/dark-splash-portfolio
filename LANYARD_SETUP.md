# Lanyard Component Setup

The Lanyard component has been integrated into your portfolio, but it requires some additional assets to work properly.

## Required Files

You need to provide the following files in your `public` folder:

### 1. card.glb
- A 3D model of a business card
- Download from: [React Bits Lanyard Demo](https://reactbits.dev/r/Lanyard-TS-TW)
- Or create your own using: [ModelViewer Editor](https://modelviewer.dev/editor/)
- Place at: `public/card.glb`

### 2. lanyard.png
- A texture for the lanyard band
- A placeholder has been generated at `public/lanyard.png`
- You can replace it with your custom design

## Current Status

✅ All required dependencies installed
✅ TypeScript declarations added
✅ Lanyard component integrated into Hero section (right side)
✅ Component will fallback to a simple colored card if .glb file is missing

## Next Steps

1. Download or create `card.glb` file
2. Place it in the `public` folder
3. Optionally customize `lanyard.png` with your branding
4. The component will automatically detect and use the files

## Customization

You can customize the Lanyard behavior in `src/components/Hero.tsx`:

```tsx
<Lanyard 
  position={[0, 0, 20]}  // Camera position
  gravity={[0, -40, 0]}   // Physics gravity
/>
```

## Features

- Interactive: Drag the card with your mouse
- Physics-based animation using Rapier
- Automatically adjusts for mobile screens
- Smooth rope simulation connecting the card to the lanyard