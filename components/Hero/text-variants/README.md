# Hero text animation variants

The active variant is selected by the `textStyles` import in `components/Hero/index.tsx`.

- **Mark 1** (`mark1.module.css`): staggered 3D word assembly, gold light sweep, lock glow, and tracing lines. Preserved from the version named Mark 1.
- **JARVIS** (`jarvis.module.css`): cyan glyph scanning, a brief signal flicker, calibration lines, and a gold identity lock. Currently active.

To return to Mark 1, change only the import:

```tsx
import textStyles from "./text-variants/mark1.module.css";
```

Both variants use the same hero markup, retain the original copy and final colors, play once on mount, and disable animation for reduced motion.
