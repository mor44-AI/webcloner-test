"use client";

import { useEffect, useRef } from "react";

/**
 * Reliable autoplay for muted background/demo videos.
 *
 * React's `muted` JSX attribute is famously unreliable — it doesn't always set
 * the DOM `muted` property before the autoplay gate is evaluated, so Chrome
 * blocks playback. We set `muted` imperatively, then call play() on mount and
 * whenever the element scrolls into view (Chrome pauses offscreen media).
 */
export function AutoplayVideo({
  src,
  className,
  type = "video/mp4",
}: {
  src: string;
  className?: string;
  type?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    const tryPlay = () => {
      v.play().catch(() => {
        /* autoplay still blocked; ignore */
      });
    };
    tryPlay();

    if (typeof IntersectionObserver !== "undefined") {
      const obs = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) tryPlay();
          }
        },
        { threshold: 0.2 }
      );
      obs.observe(v);
      return () => obs.disconnect();
    }
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
    >
      <source src={src} type={type} />
    </video>
  );
}
