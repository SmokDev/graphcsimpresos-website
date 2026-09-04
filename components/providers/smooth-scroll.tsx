"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

/**
 * Single global Lenis instance.
 * - Respects prefers-reduced-motion (no smoothing then).
 * - Scrolls to top on route change.
 * - Exposes the instance on window for edge cases (menu open/close).
 */
export default function SmoothScroll({
	children,
}: {
	children: React.ReactNode;
}) {
	const lenisRef = useRef<Lenis | null>(null);
	const pathname = usePathname();

	useEffect(() => {
		const reduced = window.matchMedia(
			"(prefers-reduced-motion: reduce)"
		).matches;
		if (reduced) return;

		const lenis = new Lenis({
			duration: 1.15,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smoothWheel: true,
			touchMultiplier: 1.6,
		});
		lenisRef.current = lenis;
		(window as unknown as { __lenis?: Lenis }).__lenis = lenis;

		let raf = 0;
		const loop = (time: number) => {
			lenis.raf(time);
			raf = requestAnimationFrame(loop);
		};
		raf = requestAnimationFrame(loop);

		return () => {
			cancelAnimationFrame(raf);
			lenis.destroy();
			lenisRef.current = null;
		};
	}, []);

	// Reset scroll on navigation (instant — no fight with transitions)
	useEffect(() => {
		if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true });
		else window.scrollTo(0, 0);
	}, [pathname]);

	return <>{children}</>;
}

export function stopScroll() {
	(window as unknown as { __lenis?: Lenis }).__lenis?.stop();
}

export function startScroll() {
	(window as unknown as { __lenis?: Lenis }).__lenis?.start();
}
