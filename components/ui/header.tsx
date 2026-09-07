"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/utils/cn";
import { SOLUTIONS } from "@/utils/site";
import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";
import { startScroll, stopScroll } from "@/components/providers/smooth-scroll";

const NAV = [
	{ href: "/", label: "Inicio" },
	{ href: "/nosotros", label: "Nosotros" },
	{ href: "/soluciones", label: "Soluciones" },
];

export function NavLink({
	href,
	children,
	className,
	onNavigate,
}: {
	href: string;
	children: React.ReactNode;
	className?: string;
	onNavigate?: () => void;
}) {
	const pathname = usePathname();
	const active = pathname === href;
	return (
		<Link
			href={href}
			onClick={onNavigate}
			aria-current={active ? "page" : undefined}
			className={cn(
				"group relative px-4 py-2 text-[13px] font-normal uppercase tracking-[0.18em] transition-colors duration-300 ease-out",
				active ? "text-mint" : "text-lightgrey/80 hover:text-lightgrey",
				className
			)}
		>
			{children}
			<span
				aria-hidden
				className={cn(
					"absolute inset-x-4 bottom-0.5 h-px origin-left bg-mint transition-transform duration-300 ease-out",
					active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
				)}
			/>
		</Link>
	);
}

export default function Header() {
	const [open, setOpen] = useState(false);
	const [dropOpen, setDropOpen] = useState(false);
	const pathname = usePathname();
	const reduce = usePrefersReducedMotion();

	useEffect(() => {
		setOpen(false);
	}, [pathname]);

	useEffect(() => {
		setDropOpen(false);
	}, [pathname]);

	useEffect(() => {
		if (open) stopScroll();
		else startScroll();
	}, [open ]);

	return (
		<>
			<header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-6 sm:pt-5">
				<div
					className={cn(
						"flex w-full max-w-6xl items-center justify-between gap-2 rounded-full border border-lightgrey/10 bg-midnight/60 py-2.5 pl-4 pr-2 shadow-[0_10px_40px_-24px_rgba(0,0,0,0.8)] backdrop-blur-xl backdrop-saturate-150 transition-[background-color,border-color] duration-500 ease-out hover:border-lightgrey/20 hover:bg-midnight/80 sm:pl-6"
					)}
				>
					<Link
						href="/"
						className="flex shrink-0 items-center transition-opacity duration-300 ease-out hover:opacity-85"
						aria-label="Graphics Impresos — inicio"
					>
						<Image
							src="/Logo%20Lightgray.svg"
							alt="Graphics Impresos"
							width={190}
							height={46}
							className="h-8 w-auto object-contain sm:h-9"
							priority
						/>
					</Link>

					<nav
						className="hidden items-center gap-1 lg:flex"
						aria-label="Navegación principal"
					>
						<NavLink href="/">Inicio</NavLink>
						<NavLink href="/nosotros">Nosotros</NavLink>
						<div
							className="relative"
							onMouseEnter={() => setDropOpen(true)}
							onMouseLeave={() => setDropOpen(false)}
							onFocusCapture={() => setDropOpen(true)}
							onBlur={(e) => {
								if (!e.currentTarget.contains(e.relatedTarget as Node | null))
									setDropOpen(false);
							}}
							onKeyDown={(e) => {
								if (e.key === "Escape") setDropOpen(false);
							}}
						>
							<NavLink href="/soluciones" aria-haspopup="true" aria-expanded={dropOpen}>
								Soluciones
							</NavLink>
							<div
								className={cn(
									"absolute left-1/2 top-full -translate-x-1/2 pt-3 transition-all duration-300",
									dropOpen
										? "visible opacity-100"
										: "invisible opacity-0"
								)}
							>
								<div className="w-80 rounded-2xl border border-lightgrey/10 bg-midnight-deep/95 p-2 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.9)] backdrop-blur-xl">
									{SOLUTIONS.map((s) => (
										<Link
											key={s.slug}
											href={`/soluciones#${s.slug}`}
											scroll={false}
											onClick={() => setDropOpen(false)}
											className="group/item flex items-baseline gap-3 rounded-xl px-4 py-2.5 transition-colors hover:bg-lightgrey/5"
										>
											<span className="font-display text-xs text-mint/70">
												{s.n}
											</span>
											<span className="font-display text-lg font-light uppercase tracking-wide text-lightgrey/85 transition-colors group-hover/item:text-mint">
												{s.title}
											</span>
										</Link>
									))}
								</div>
							</div>
						</div>
					</nav>

					<div className="flex items-center gap-2">
						<Link
							href="/cotizaciones"
							className="group hidden items-center gap-1.5 rounded-full bg-mint py-2.5 pl-5 pr-4 text-[13px] font-normal uppercase tracking-[0.16em] text-midnight transition-all duration-300 hover:bg-lightgrey hover:shadow-[0_0_28px_-6px_var(--mint)] sm:inline-flex"
						>
							Cotizar proyecto
							<ArrowUpRight
								className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
								aria-hidden
							/>
						</Link>
						<button
							className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-lightgrey/15 text-lightgrey transition-colors hover:border-mint/60 hover:text-mint lg:hidden"
							onClick={() => setOpen(true)}
							aria-label="Abrir menú"
							aria-expanded={open}
						>
							<Menu className="h-5 w-5" aria-hidden />
						</button>
					</div>
				</div>
			</header>

			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: reduce ? 0 : 0.3 }}
						className="fixed inset-0 z-[60] flex flex-col bg-midnight-deep/90 backdrop-blur-2xl lg:hidden"
						role="dialog"
						aria-modal="true"
						aria-label="Menú de navegación"
					>
						<div className="flex items-center justify-between px-5 pt-5">
							<Image
							src="/Logo%20Lightgray.svg"
							alt="Graphics Impresos"
							width={170}
								height={42}
								className="h-8 w-auto object-contain"
							/>
							<button
								className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-lightgrey/15 text-lightgrey transition-colors hover:border-mint/60 hover:text-mint"
								onClick={() => setOpen(false)}
								aria-label="Cerrar menú"
							>
								<X className="h-5 w-5" aria-hidden />
							</button>
						</div>

						<nav
							className="flex flex-1 flex-col justify-center gap-1 px-8"
							aria-label="Navegación móvil"
						>
							{NAV.map((item, i) => {
								const active = pathname === item.href;
								return (
									<motion.div
										key={item.href}
										initial={{ opacity: 0, y: reduce ? 0 : 32 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{
											delay: reduce ? 0 : 0.08 + i * 0.07,
											duration: 0.55,
											ease: [0.22, 1, 0.36, 1],
										}}
									>
										<Link
											href={item.href}
											onClick={() => setOpen(false)}
											aria-current={active ? "page" : undefined}
											className={cn(
												"group flex items-baseline gap-4 border-b border-lightgrey/10 py-5",
												active ? "text-mint" : "text-lightgrey"
											)}
										>
											<span className="font-display text-sm text-mint/70">
												0{i + 1}
											</span>
											<span className="font-display text-5xl font-medium uppercase leading-none tracking-tight">
												{item.label}
											</span>
											<ArrowUpRight
												className="ml-auto h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
												aria-hidden
											/>
										</Link>
										{item.href === "/soluciones" && (
											<div className="flex flex-wrap gap-2 py-4">
												{SOLUTIONS.map((s) => (
													<Link
														key={s.slug}
														href={`/soluciones#${s.slug}`}
														scroll={false}
														onClick={() => setOpen(false)}
														className="rounded-full border border-lightgrey/15 px-4 py-2 text-[12px] uppercase tracking-[0.16em] text-lightgrey/75 transition-colors hover:border-mint/60 hover:text-mint"
													>
														{s.title}
													</Link>
												))}
											</div>
										)}
									</motion.div>
								);
							})}
						</nav>

						<motion.div
							initial={{ opacity: 0, y: reduce ? 0 : 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: reduce ? 0 : 0.3, duration: 0.5 }}
							className="px-8 pb-10"
						>
							<Link
								href="/cotizaciones"
								onClick={() => setOpen(false)}
								className="flex items-center justify-center gap-2 rounded-full bg-mint py-4 text-sm uppercase tracking-[0.18em] text-midnight"
							>
								Cotizar proyecto
								<ArrowUpRight className="h-4 w-4" aria-hidden />
							</Link>
							<p className="mt-4 text-center text-xs uppercase tracking-[0.2em] text-lightgrey/50">
								55 8773 0703 · graphicsimpresos.com
							</p>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
