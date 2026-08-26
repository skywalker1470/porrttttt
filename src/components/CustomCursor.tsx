import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR = 'a, button, [role="button"], input, textarea, select, [data-cursor-hover]';

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const posRef = useRef<HTMLDivElement>(null);

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
      if (posRef.current) {
        posRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
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
    <div ref={posRef} className="pointer-events-none fixed left-0 top-0 z-[100]" aria-hidden="true">
      <div
        className={`w-9 h-9 -translate-x-1/2 -translate-y-1/2 border-2 border-primary ${
          hovering ? "scale-100 rounded-none bg-transparent" : "scale-[0.44] rounded-full bg-primary"
        }`}
        style={{
          transition: "transform 450ms cubic-bezier(0.22, 1, 0.36, 1), border-radius 450ms cubic-bezier(0.22, 1, 0.36, 1), background-color 300ms ease-out",
        }}
      />
    </div>
  );
};

export default CustomCursor;
