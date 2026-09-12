"use client";

import Link from "next/link";
import { motion, useTransform } from "motion/react";
import { CTA } from "@/components/ui/button";
import { useScene } from "./use-scene";
import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";
import { SITE } from "@/utils/site";

/**
 * ESCENA 07 — CIERRE. Dos líneas escalonadas y el botón
 * general de la web como punto final.
 */
export default function OutroScene() {
	const reduce = usePrefersReducedMotion();
	const { ref, progress: p } = useScene<HTMLElement>("pass");
	const l1Op = useTransform(p, [0.05, 0.3], reduce ? [1, 1] : [0, 1]);
	const l1Y = useTransform(p, [0.05, 0.38], reduce ? [0, 0] : [46, 0]);
	const l2Op = useTransform(p, [0.25, 0.55], reduce ? [1, 1] : [0, 1]);
	const l2Y = useTransform(p, [0.25, 0.6], reduce ? [0, 0] : [46, 0]);
	const ctaOp = useTransform(p, [0.45, 0.8], reduce ? [1, 1] : [0, 1]);
	const ctaY = useTransform(p, [0.45, 0.85], reduce ? [0, 0] : [30, 0]);
	const driftY = useTransform(p, [0, 1], reduce ? [0, 0] : [0, -60]);

	return (
		<section ref={ref} aria-label="Cierre" className="relative h-[200svh] bg-mint text-midnight">
			<div className="sticky top-0 flex h-svh flex-col overflow-hidden">
				<motion.div
					style={{ y: driftY }}
					className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 sm:px-10 will-change-transform"
				>
					<motion.h2
						style={{ opacity: l1Op, y: l1Y }}
						className="font-display text-[13vw] font-medium uppercase leading-[0.93] tracking-tight sm:text-7xl lg:text-8xl will-change-transform"
					>
						¿Tienes una idea?
					</motion.h2>
					<motion.p
						style={{ opacity: l2Op, y: l2Y }}
						className="mt-2 font-display text-[13vw] font-medium uppercase leading-[0.93] tracking-tight underline decoration-mint decoration-[0.06em] underline-offset-[0.12em] sm:text-7xl lg:text-8xl will-change-transform"
					>
						Hagámosla realidad.
					</motion.p>

					<motion.div style={{ opacity: ctaOp, y: ctaY }} className="mt-12 will-change-transform">
						<CTA href="/cotizaciones" variant="dark" className="px-10 py-4.5 text-sm">
							Solicitar cotización
						</CTA>
						<p className="mt-8 text-[15px] text-midnight/65">
							<a href={SITE.phoneHref} className="underline underline-offset-4 transition-colors hover:text-midnight">
								{SITE.phone}
							</a>{" "}
							·{" "}
							<a href={`mailto:${SITE.email}`} className="underline underline-offset-4 transition-colors hover:text-midnight">
								{SITE.email}
							</a>
						</p>
						<Link
							href="/"
							className="mt-10 inline-block text-[12px] uppercase tracking-[0.22em] text-midnight/50 transition-colors hover:text-midnight"
						>
							← Volver al sitio
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
