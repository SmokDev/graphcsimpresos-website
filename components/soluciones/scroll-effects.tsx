"use client";

import Image from "next/image";
import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";

/** The section, not its moving layers, anchors progress so scrolling stays stable. */
export function SolutionScene({
  src, alt, children, className, mode = "feature", labelledBy,
}: {
  src: string; alt: string; children: ReactNode; className: string;
  mode?: "hero" | "feature"; labelledBy?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = usePrefersReducedMotion();
  const hero = mode === "hero";
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: hero ? ["start start", "end start"] : ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : hero ? ["-3%", "8%"] : ["-7%", "7%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : hero ? [1.02, 1.08] : [1.08, 1.02]);
  const contentY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : hero ? [0, 36] : [30, -24]);
  return (
    <section ref={ref} className={className} aria-labelledby={labelledBy}>
      <motion.div style={{ y: imageY, scale: imageScale }} className="pointer-events-none absolute -inset-y-[14%] inset-x-0 -z-20 will-change-transform">
        <Image src={src} alt={alt} fill priority={hero} sizes="100vw" className={hero ? "object-cover object-[65%_center] lg:object-center" : "object-cover"} />
      </motion.div>
      {hero && <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-midnight/90 via-midnight/65 to-midnight/20" aria-hidden />}
      <div className={`pointer-events-none absolute inset-0 -z-10 ${hero ? "bg-gradient-to-t from-midnight via-transparent to-midnight/35" : "bg-gradient-to-t from-midnight via-midnight/50 to-midnight/20"}`} aria-hidden />
      <motion.div style={{ y: contentY }} className="relative w-full will-change-transform">{children}</motion.div>
    </section>
  );
}

/** Reversible entrance driven by actual scroll progress, with static reduced motion. */
export function ScrollContent({ children, className, distance = 32 }: { children: ReactNode; className?: string; distance?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.98", "start 0.7"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [distance, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [0.4, 1]);
  return <div ref={ref} className={className}><motion.div style={{ y, opacity }} className="h-full will-change-transform">{children}</motion.div></div>;
}

export function GalleryParallax({ src, alt, className }: { src: string; alt: string; className: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-4%", "4%"]);
  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div style={{ y }} className="absolute -inset-y-[8%] inset-x-0 will-change-transform">
        <Image src={src} alt={alt} fill sizes="(max-width: 1023px) 100vw, 60vw" className={className} />
      </motion.div>
    </div>
  );
}
