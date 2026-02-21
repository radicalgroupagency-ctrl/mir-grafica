---
description: Design System Constraints for MIR Gráfica
---

# Design System: MIR Gráfica

## Visual Language
The website uses a modern, bold, and high-impact visual style that communicates premium quality in large-format printing and branding. The core design principles are:

1.  **Bold Typography**: "Space Grotesk" for both display headings and body copy. Deeply contrasting weights (from highly thin/light for descriptions to bold/black for headlines).
2.  **High Contrast**: A predominant light theme with extreme contrast using deep "background-dark" (nearly black) for accents, and a vibrant primary cyan for highlights.
3.  **Modern Enhancements**: Glassmorphism on navigation bars, text-outline strokes on secondary headings, and subtle entry/hover animations on cards and interactive elements.
4.  **B2B & Premium Focus**: Sections should feel structured, large, and spacious, focusing on showcasing high-quality visuals of products and real-world printing applications.

## Color Palette

### Primary Colors
*   **Primary Cyan**: `#00a3e0` (Core brand color, used for CTA buttons, highlights, text emphasis, and primary icons).

### Neutral Palette (Light Theme Focus)
*   **Background Light**: `#f7f8f5` (Main app background, slightly warm off-white).
*   **Background White**: `#ffffff` (Card backgrounds, content sections).
*   **Text Slate 900**: `slate-900` / `#0f172a` (Primary bold text).
*   **Text Slate 600/500/400**: Used for varying degrees of description text hierarchy.

### Dark Theme Palette (Inverted Modes & Accents)
*   **Background Dark**: `#0a0c08` (Used in Hero section overlays, inverted buttons, and dark mode base).
*   **Neutral Dark**: `#151a10` (Elevated dark surfaces).
*   **Neutral Border**: `#2a3320` (Subtle borders in dark mode).

## Typography
*   **Primary Font**: `Space Grotesk`
    *   *Usage*: All UI elements.
    *   *Scale*:
        *   Hero/Massive Headlines: `text-6xl` to `text-9xl` (`font-black uppercase italic tracking-tighter`).
        *   Section Titles: `text-4xl` to `text-6xl` (`font-black uppercase italic tracking-tighter`).
        *   Eyebrow Headers: `text-sm` to `text-lg` (`text-primary font-bold uppercase tracking-widest`).
        *   Body Text: `text-lg` to `text-xl` (`font-light leading-relaxed`).
        *   Small Details: `text-xs` to `text-sm` (`uppercase tracking-widest`).

## Component Specifications

### Buttons
*   **Primary CTA**: Background Primary Cyan, Text Background-Dark, heavy padding (`px-10 py-5`), rounded-xl, uppercase `font-black text-xl tracking-tighter`, hover effects (`hover:bg-white` or `hover:scale-105`).
*   **Secondary CTA**: Transparent with `border-2`, text matches border, backdrop blur, hover states invert or increase border opacity.

### Cards (Services/Features)
*   **Container**: Subtle rounded corners (`rounded-xl`), light gray `bg-slate-50` or white, thin border `border-slate-200`.
*   **Interactivity**: Hover states change borders to `hover:border-primary/50` and trigger image scaling (`group-hover:scale-110` with `duration-700`).

### Layout & Spacing
*   **Containers**: Maximum width of `max-w-7xl` with `px-6` horizontal padding.
*   **Section Spacing**: Massive vertical padding between sections (`py-24`) to give content room to breathe.

## Tone of Voice
*   Professional, commanding, modern, reliable, and focused on "excellence", "impact", and "quality".

## Iconography
*   **Library**: Material Symbols Outlined (Google Fonts).

### Animation Rules
*   **Subtle & Smooth**: Use Tailwind's `transition-all duration-500` or `duration-700` for hover states.
*   **Marquee**: Infinite scrolling banners (`animate-marquee`) for repeating text ribbons (e.g., list of services).
*   **Text Effects**: Use the custom `.text-outline` class for hollow/stroked text on massive headings.
