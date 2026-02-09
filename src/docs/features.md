# Future Features & Improvements

## Navbar: Pure CSS Scroll Effects

**Status:** Planned / Postponed (Waiting for better browser support)
**Component:** `src/components/navbar/Navbar.astro`

Currently, the Navbar uses a small JavaScript observer (`updateScrollState`) to toggle the `data-scrolled` attribute, which in turn switches Tailwind classes for the background and text colors.

We aim to replace this JavaScript logic entirely with **CSS Scroll-Driven Animations** (`animation-timeline: scroll()`), which delegates the scroll tracking to the browser's compositor thread, improving performance and removing client-side JS.

### Proposed Implementation

Create a `navbar.css` file with the following logic:

```css
/* Animation to fade in the background */
@keyframes navbar-bg-reveal {
  to {
    background-color: var(--color-background);
    backdrop-filter: blur(8px);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  }
}

/* Animation to switch text color to primary blue */
@keyframes navbar-text-primary {
  to {
    color: var(--color-primary);
  }
}

/* Apply animations relative to the scroll position */
:root {
  animation-timeline: scroll();
}

.nav-bg {
  /* Start transparent, animate to solid */
  animation: navbar-bg-reveal linear both;
  animation-range: 0px 100px; /* Trigger over the first 100px of scroll */
}

.nav-text {
  /* Start white (primary-foreground), animate to blue (primary) */
  animation: navbar-text-primary linear both;
  animation-range: 0px 100px;
}
```

### Why Postponed?

As of early 2026, CSS Scroll-Driven Animations are supported in Chrome, Edge, and newer versions of Safari, but global support coverage might not be 100% for all user segments. Since the project uses Tailwind v4 (which is modern), we are close to adopting this, but we decided to stick to the minimal JS observer for maximum compatibility for now.

### Action Items

1.  Verify [Can I Use: animation-timeline](https://caniuse.com/css-animation-timeline) support.
2.  Remove `window.addEventListener('scroll', ...)` from `Navbar.astro`.
3.  Import `navbar.css` in `Navbar.astro`.
4.  Apply `nav-bg` and `nav-text` classes to the appropriate elements.
