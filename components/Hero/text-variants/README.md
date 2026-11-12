# Hero text animation variants

The active simple fade is defined in `app/globals.css` and applied with the `hero-text-headline` and `hero-text-subtitle` classes in `components/Hero/index.tsx`.

- **Simple** (`app/globals.css`): an in-place fade for the headline and subtitle. Currently active.
- **Mark 1** (`mark1.module.css`): staggered 3D word assembly, gold light sweep, lock glow, and tracing lines. Preserved from the version named Mark 1.
- **JARVIS** (`jarvis.module.css`): cyan glyph scanning, a brief signal flicker, calibration lines, and a gold identity lock.

The archived Mark 1 and JARVIS variants also require the word and phrase spans with `--order` used by those effects; the simple variant works directly on the heading and paragraph.

Mark 1 stylesheet import:

```tsx
import textStyles from "./text-variants/mark1.module.css";
```

All variants retain the original copy and final colors, play once on mount, and disable animation for reduced motion.
