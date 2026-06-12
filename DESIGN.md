# Design System: Bredaz Software Studio

## 1. Visual Theme & Atmosphere
A refined, editorial-grade obsidian design system representing a boutique software craftsmanship studio. The visual atmosphere is clean, structured, and balanced, reflecting the precision of software development combined with the organic, outdoor spirit of the scouting movement. Confident asymmetry, generous whitespace, and sharp interactive components create a premium, high-agency feel.

- **Density:** Balanced Editorial (Level 4)
- **Variance:** Offset Asymmetric Layouts (Level 8)
- **Motion:** Fluid CSS with Spring Easing (Level 6)

## 2. Color Palette & Roles
- **Obsidian Dark (Canvas)** (#080609) — Primary canvas background, deep and rich.
- **Deep Slate (Surface)** (#0e0a0f) — Primary component surface for cards, grids, and display panels.
- **Elevated Charcoal (Surface Elevated)** (#161018) — Interactive widgets, dropdowns, and active states.
- **Crimson Red (Accent Primary)** (#d62246) — The primary brand highlight. Used for main action CTAs and focal points.
- **Crimson Blush (Accent Hover)** (#f13b5e) — Hover states for primary actions.
- **Cyan Glow (Accent Secondary)** (#22d3ee) — Secondary accent color, highlighting utility statuses, monospaced details, and developer terminal outputs.
- **Alabaster White (Text Primary)** (#f5f2f6) — Headings and primary textual elements.
- **Muted Lavender (Text Secondary)** (#a39ba6) — Body copy, metadata, and minor labels.
- **Whisper Border** (rgba(255, 255, 255, 0.05)) — Fine 1px borders and container dividing lines.

## 3. Typography Rules
- **Display Headlines:** `Outfit` (Sans-Serif) — Set with tight tracking (`tracking-tight`), heavy weights (700-900), and sharp line heights. Accent color is applied contextually to emphasize the brand punchline.
- **Body & Paragraphs:** `Plus Jakarta Sans` (Sans-Serif) — Set to `1.0rem` / `16px` with a relaxed line height (`leading-relaxed`) to prevent reading fatigue. Restricted to `65ch` line length.
- **Technical UI / Numbers:** `JetBrains Mono` (Monospaced) — Used exclusively for data, status pills, cipher output text, and code strings.
- **Banned:** `Inter`, generic system sans-serifs, and traditional editorial serifs. No text gradients on large text blocks.

## 4. Component Stylings
- **Buttons:** Shaped with a medium radius (`var(--radius-md)` / `16px`). Flat colors only. Zero neon outer-glow. Active state triggers a tactile physical shift (`transform: translateY(1px)`).
- **Cards:** Rounded using a generous curve (`var(--radius-lg)` / `24px`). Features a subtle `1px` border refraction (`border-white/5`) and a deep, soft shadow tinted to the background. No cards for pure text elements; spacing is preferred.
- **Inputs & Selects:** Dark base surface (#080609) with a fine outline. Active input reveals a Cyan Glow border highlight. Error feedback sits cleanly below the box.
- **Loaders:** Segmented skeletal shimmer matching the layout grid perfectly. No standard spinning wheels.

## 5. Layout Principles
- **Asymmetrical Split Hero:** Left-aligned bold typography over generous whitespace. The right column displays a single, high-fidelity device frame tilted at `2deg`.
- **Bento Feature Grid:** Dynamic layouts spanning 2-column or 3-column structures to present flagship highlights asynchronously.
- **Mathematical Spacing:** Incremental padding matching `1rem`, `1.5rem`, `2.5rem`, and `4.5rem`.
- **Absolute Collapse:** Grid sections aggressively shift into a unified single-column vertical hierarchy on screens below `768px`.

## 6. Motion & Interaction
- **Spring Physics:** All hover and active feedback processes must leverage clean spring curves (`stiffness: 100, damping: 20`) to produce natural, physical weight.
- **Micro-Interactions:** Status indicators emit a soft breathing pulse. Real-time inputs instantly animate output ciphers on the screen.

## 7. Anti-Patterns (Banned)
- No emojis anywhere.
- No purple or neon blue outer glows.
- No centered hero layout structures.
- No classic 3-column card layouts.
- No placeholder copy clichés ("Elevate", "Next-Gen", "Seamless").
- No fake statistics (`99.99%`).
- No generic avatars or user silhouettes.
- No overlapping absolute components.
