"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";

const SEEN_KEY = "graphics-loader-seen";
const MIN_TIME = 1500;
const MAX_TIME = 3200;
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Loader premium de entrada — solo primera visita por sesión.
 * Marca + contador con easing, barra de progreso y salida en cortina.
 * Respeta `prefers-reduced-motion` (no se muestra entonces).
 */
export default function SiteLoader() {
	const reduce = usePrefersReducedMotion();
	const [visible, setVisible] = useState(true);
	const [skipped, setSkipped] = useState(false);
	const [progress, setProgress] = useState(0);
	const doneRef = useRef(false);

	useEffect(() => {
		if (reduce) {
			setSkipped(true);
			return;
		}
		let seen = false;
		try {
			seen = sessionStorage.getItem(SEEN_KEY) === "1";
		} catch {
			seen = false;
		}
		if (seen) {
			setSkipped(true);
			return;
		}

		document.documentElement.style.overflow = "hidden";

		let loaded = document.readyState === "complete";
		const onLoad = () => {
			loaded = true;
		};
		if (!loaded) window.addEventListener("load", onLoad);

		const start = performance.now();
		let raf = 0;

		const finish = () => {
			if (doneRef.current) return;
			doneRef.current = true;
			setProgress(100);
			window.setTimeout(() => {
				setVisible(false);
				document.documentElement.style.overflow = "";
				try {
					sessionStorage.setItem(SEEN_KEY, "1");
				} catch {
					/* almacenamiento no disponible */
				}
			}, 420);
		};

		const tick = (now: number) => {
			const elapsed = now - start;
			const t = Math.min(elapsed / MIN_TIME, 1);
			setProgress(Math.round((1 - Math.pow(1 - t, 3)) * 94));
			if (elapsed >= MIN_TIME && loaded) {
				finish();
				return;
			}
			if (elapsed >= MAX_TIME) {
				finish();
				return;
			}
			raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);

		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("load", onLoad);
			document.documentElement.style.overflow = "";
		};
	}, [reduce]);

	if (skipped) return null;

	return (
		<AnimatePresence>
			{visible && (
				<motion.div
					key="site-loader"
					role="status"
					aria-label="Cargando Graphics Impresos"
					className="fixed inset-0 z-[100] flex flex-col justify-between overflow-hidden bg-midnight text-lightgrey"
					exit={{ y: "-100%" }}
					transition={{ duration: 0.9, ease: EASE }}
				>
					<div className="relative flex items-center justify-between px-5 pt-6 sm:px-10">
						<p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-mint">
							<span aria-hidden className="h-px w-8 bg-mint" />
							Graphics Impresos
						</p>
						<p className="font-display text-sm tracking-wide text-lightgrey/60">
							CDMX — México
						</p>
					</div>

					<motion.div
						className="relative flex flex-col items-center gap-5 px-6 text-center"
						initial={{ opacity: 0, y: 28 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: EASE }}
					>
						<Image
							src="/Logo%20Mint.svg"
							alt=""
							aria-hidden
							width={240}
							height={58}
							priority
							className="h-12 w-auto object-contain sm:h-14"
						/>
						<p className="font-display text-lg font-light uppercase tracking-wide text-lightgrey/70 sm:text-xl">
							Diseñamos tu idea — imprimimos tu éxito
						</p>
					</motion.div>

					<div className="relative px-5 pb-8 sm:px-10 sm:pb-10">
						<div className="flex items-end justify-between gap-6">
							<p className="pb-2 text-[11px] uppercase tracking-[0.3em] text-lightgrey/50">
								Cargando
							</p>
							<p
								className="font-display text-6xl font-medium leading-none text-mint sm:text-7xl"
								aria-hidden
							>
								{progress}
								<span className="text-2xl align-top">%</span>
							</p>
						</div>
						<div className="mt-4 h-px w-full bg-lightgrey/15">
							<div
								className="h-full bg-mint"
								style={{ width: `${progress}%` }}
							/>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
