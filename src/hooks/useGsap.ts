import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Expose for debugging (harmless in production; tree-shaken via `if`)
if (typeof window !== "undefined") {
  (window as unknown as { __gsap: typeof gsap }).__gsap = gsap;
}

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function useIsomorphicLayoutEffect(effect: () => void) {
  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    effect();
    ScrollTrigger.refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export { gsap, ScrollTrigger };
