# Motion & Interaction Practice — HTML/CSS/JS

4 pages focused entirely on **UI/UX motion**: scroll animations, cursor interactions, and animated transitions.
These use only vanilla JS — no animation libraries — so you see exactly how each effect is built under the hood.

## Projects

1. **01-scroll-reveal-portfolio** — Photography portfolio
   - Elements fade + slide in as you scroll, using `IntersectionObserver` (not scroll-event polling — this is the modern, performant technique)
   - Parallax hero background that scrolls slower than the page
   - Animated number counters that count up once when scrolled into view
   - Image captions that slide up on hover

2. **02-interactive-showcase** — Product showcase (dark mode)
   - A glowing radial gradient that follows your cursor (`mousemove` + CSS custom properties)
   - A 3D tilt effect on the product card and feature cards, calculated live from mouse position relative to the element
   - A "shine" highlight that moves across the tilted card following the cursor
   - Magnetic buttons — the label nudges toward your cursor as you approach

3. **03-onboarding-flow** — Multi-step app onboarding
   - Slide transitions between steps (no page reload, just CSS transform + opacity)
   - An animated progress bar that fills based on current step
   - Ambient background blobs that slowly morph and float (pure CSS `@keyframes`)
   - A satisfying "pop" animation on the final success checkmark

4. **04-creative-agency** — Agency landing page
   - A custom cursor (a ring) that replaces the system cursor and expands over links/buttons
   - An infinite horizontal marquee of scrolling text (pure CSS animation, no JS needed for the scroll itself)
   - Scroll-triggered row reveals in the work list
   - `mix-blend-mode: difference` used so the cursor and nav always stay visible against any background

## Key techniques to study (in order of how often you'll reuse them)

- **IntersectionObserver** for scroll reveals — used in #1 and #4. Way better than listening to `scroll` and checking `getBoundingClientRect()` on every pixel.
- **CSS transitions on transform/opacity** — cheap for the browser to animate (no layout reflow), used everywhere here.
- **Mouse-position-driven transforms** — used in #2 for tilt/glow/magnetic effects. The core trick is always: get mouse position relative to the element, map it to a rotation/translation range, apply via `style.transform`.
- **`requestAnimationFrame`** — used for the counter animation in #1, the right way to animate numbers instead of `setInterval`.

## How to use

Open with Live Server / Live Preview like the others. Move your mouse around #2 and #4 especially — those are meant to be *felt*, not just read.

Good next exercise: take the tilt effect from #2 and add it to one of the pricing cards from your earlier SaaS landing page practice.
