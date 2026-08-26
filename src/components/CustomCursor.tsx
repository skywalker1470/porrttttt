import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR = 'a, button, [role="button"], input, textarea, select, [data-cursor-hover]';

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mql = window.matchMedia("(pointer: fine)");
    const update = () => setEnabled(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add("custom-cursor-active");

    const handleMove = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest(INTERACTIVE_SELECTOR));
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseover", handleOver, { passive: true });

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 bg-primary"
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2 border transition-[width,height,border-color,background-color] duration-150 ease-out ${
          hovering ? "w-9 h-9 border-primary bg-primary/10" : "w-6 h-6 border-muted-foreground/50 bg-transparent"
        }`}
        style={{ transitionProperty: "width, height, border-color, background-color" }}
        aria-hidden="true"
      />
    </>
  );
};

export default CustomCursor;
