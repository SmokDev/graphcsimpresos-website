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

	// Navegación con hash: respeta #sección (Lenis no hace scroll nativo a anclas)
	useEffect(() => {
		const hash = typeof window !== "undefined" ? window.location.hash : "";
		if (hash) {
			const id = decodeURIComponent(hash.slice(1));
			let attempts = 0;
			const tryScroll = () => {
				const el = document.getElementById(id);
				if (el) {
					if (lenisRef.current)
						lenisRef.current.scrollTo(el, { offset: -96, duration: 1.2 });
					else el.scrollIntoView({ behavior: "smooth", block: "start" });
				} else if (attempts < 12) {
					attempts += 1;
					setTimeout(tryScroll, 100);
				}
			};
			// Espera al render de la página destino antes de buscar el ancla
			setTimeout(tryScroll, 80);
		} else {
			// Reset scroll on navigation (instant — no fight with transitions)
			if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true });
			else window.scrollTo(0, 0);
		}
	}, [pathname]);

	// Clicks en anclas de la misma página con scroll suave vía Lenis.
	// Cubre `href="#slug"` y links misma-ruta (`/soluciones#slug` estando en /soluciones).
	// Los links a otra página se dejan a Next.js (el efecto de arriba hace el scroll al llegar).
	useEffect(() => {
		const onClick = (e: MouseEvent) => {
			const target = e.target as HTMLElement | null;
			const a = target?.closest?.("a[href]") as HTMLAnchorElement | null;
			if (!a) return;
			const raw = a.getAttribute("href");
			if (!raw || raw === "#") return;
			let hash = "";
			if (raw.startsWith("#")) {
				hash = raw;
			} else {
				try {
					const url = new URL(a.href);
					if (url.origin !== window.location.origin) return;
					if (url.pathname !== window.location.pathname) return;
					if (!url.hash) return;
					hash = url.hash;
				} catch {
					return;
				}
			}
			const el = document.getElementById(decodeURIComponent(hash.slice(1)));
			if (!el) return;
			e.preventDefault();
			if (lenisRef.current) lenisRef.current.scrollTo(el, { offset: -96 });
			else el.scrollIntoView({ behavior: "smooth", block: "start" });
			window.history.replaceState(null, "", hash);
		};
		document.addEventListener("click", onClick);
		return () => document.removeEventListener("click", onClick);
	}, []);

	return <>{children}</>;
}

export function stopScroll() {
	(window as unknown as { __lenis?: Lenis }).__lenis?.stop();
}

export function startScroll() {
	(window as unknown as { __lenis?: Lenis }).__lenis?.start();
}
