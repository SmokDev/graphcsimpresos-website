"use client";

import { useEffect, useState } from "react";

/**
 * SSR-safe reduced-motion hook.
 *
 * Motion's own `useReducedMotion` reads the live OS setting during render,
 * so it returns `null` on the server but `true`/`false` on the first client
 * render — a guaranteed hydration mismatch for reduced-motion users
 * whenever the value changes rendered output.
 *
 * This hook instead returns `false` on the server AND on the first client
 * render (identical HTML), then syncs with the OS setting inside an effect
 * (a plain update, never a hydration error).
 */
export function usePrefersReducedMotion(): boolean {
	const [reduced, setReduced] = useState(false);

	useEffect(() => {
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		setReduced(mq.matches);
		const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
		mq.addEventListener("change", onChange);
		return () => mq.removeEventListener("change", onChange);
	}, []);

	return reduced;
}
