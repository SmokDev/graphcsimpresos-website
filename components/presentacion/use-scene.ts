"use client";

import { useRef } from "react";
import { useScroll } from "motion/react";

/**
 * Progreso de una escena sticky.
 *
 * - "pinned" (default): 0→1 solo durante el tramo fijado.
 * - "pass": 0→1 en todo el paso, desde que entra hasta que
 *   sale por completo (start end → end start).
 */
export function useScene<T extends HTMLElement = HTMLElement>(
	mode: "pinned" | "pass" = "pinned"
) {
	const ref = useRef<T>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: mode === "pass" ? ["start end", "end start"] : ["start start", "end end"],
	});
	return { ref, progress: scrollYProgress };
}
