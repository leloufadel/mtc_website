// app/components/FlipBook.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type FlipBookProps = {
  backgroundSrc: string; // full-bleed background (mtc1)
  pages: string[];       // [cover, page-1, page-2, back-cover]
  height?: number;       // book height in px (responsive scales with container)
};

export default function FlipBook({
  backgroundSrc,
  pages,
  height = 520,
}: FlipBookProps) {
  const [pageIndex, setPageIndex] = useState(0); // 0..pages.length
  const containerRef = useRef<HTMLDivElement>(null);
  const canGoPrev = pageIndex > 0;
  const canGoNext = pageIndex < pages.length;

  const next = () => setPageIndex((i) => Math.min(i + 1, pages.length));
  const prev = () => setPageIndex((i) => Math.max(i - 1, 0));

  // Keyboard arrows
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Touch swipe (mobile)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let startX = 0;
    const start = (e: TouchEvent) => (startX = e.touches[0].clientX);
    const end = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (dx < -40) next();
      if (dx > 40) prev();
    };
    el.addEventListener("touchstart", start, { passive: true });
    el.addEventListener("touchend", end, { passive: true });
    return () => {
      el.removeEventListener("touchstart", start);
      el.removeEventListener("touchend", end);
    };
  }, []);

  // Build page stack (left -> right). Each page flips around the left edge.
  // If pageIndex > k, that page is considered "turned".
  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <Image
        src={backgroundSrc}
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/35" />

      {/* Book frame */}
      <div
        className="relative w-[min(92vw,980px)] mx-auto [perspective:2000px] z-10"
        style={{ height }}
        aria-label="Flipbook"
      >
        {/* Book shadow/backboard */}
        <div className="absolute inset-0 rounded-2xl bg-neutral-900/20 blur-md"></div>

        {/* Spine background */}
        <div className="absolute inset-0 bg-white/70 rounded-2xl shadow-2xl" />

        {/* Pages stack */}
        <div className="absolute inset-0 rounded-2xl overflow-visible">
          {pages.map((src, k) => {
            const turned = pageIndex > k; // page already flipped
            return (
              <div
                key={k}
                className={[
                  "absolute top-0 bottom-0 right-0 w-1/2 origin-left will-change-transform",
                  "transition-transform duration-700 [transform-style:preserve-3d]",
                  turned ? "rotate-y-[-180deg]" : "rotate-y-0",
                ].join(" ")}
                style={{
                  // zIndex to keep correct stack order (higher k on top when unturned)
                  zIndex: pages.length - k,
                }}
              >
                {/* FRONT of the leaf (right-side content while unturned) */}
                <div className="absolute inset-0 bg-white rounded-r-2xl overflow-hidden shadow-xl backface-hidden">
                  <Image
                    src={src}
                    alt={`page ${k + 1}`}
                    fill
                    className="object-cover"
                    sizes="50vw"
                    priority={k < 2}
                  />
                  {/* subtle edge shine */}
                  <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black/15 to-transparent pointer-events-none" />
                </div>

                {/* BACK of the leaf (revealed after flip). We show the next image if it exists, else blank */}
                <div className="absolute inset-0 bg-white rounded-l-2xl overflow-hidden shadow-xl [transform:rotateY(180deg)] backface-hidden">
                  <Image
                    src={pages[k + 1] ?? src}
                    alt={`page back ${k + 1}`}
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                  <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black/15 to-transparent pointer-events-none" />
                </div>
              </div>
            );
          })}

          {/* LEFT cover (appears when fully opened to the end) */}
          <div
            className={[
              "absolute top-0 bottom-0 left-0 w-1/2 rounded-l-2xl",
              "bg-white overflow-hidden shadow-xl",
              pageIndex === pages.length ? "opacity-100" : "opacity-0",
              "transition-opacity duration-300",
            ].join(" ")}
          >
            {/* Back cover inner face */}
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black/10 to-transparent" />
          </div>
        </div>

        {/* Controls */}
        <div className="absolute inset-0 flex items-center justify-between p-2">
          <button
            onClick={prev}
            disabled={!canGoPrev}
            aria-label="Page précédente"
            className="group disabled:opacity-40 disabled:cursor-not-allowed rounded-full bg-white/90 hover:bg-white transition shadow-lg px-3 py-3"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-5 group-active:translate-x-[-1px] transition"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>

          <button
            onClick={next}
            disabled={!canGoNext}
            aria-label="Page suivante"
            className="group disabled:opacity-40 disabled:cursor-not-allowed rounded-full bg-white/90 hover:bg-white transition shadow-lg px-3 py-3"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-5 group-active:translate-x-[1px] transition"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>

        {/* Page indicator */}
        <div className="absolute -bottom-10 inset-x-0 flex items-center justify-center gap-2">
          {Array.from({ length: pages.length + 1 }).map((_, i) => (
            <span
              key={i}
              className={[
                "h-2 w-2 rounded-full",
                i === pageIndex ? "bg-white" : "bg-white/50",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
