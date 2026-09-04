"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/utils/cn";
import { startScroll, stopScroll } from "@/components/providers/smooth-scroll";

const NAV = [
	{ href: "/", label: "Inicio" },
	{ href: "/nosotros", label: "Nosotros" },
	{ href: "/soluciones", label: "Soluciones" },
	{ href: "/cotizaciones", label: "Cotizaciones" },
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
				"group relative px-3 py-2 text-[13px] font-normal uppercase tracking-[0.18em] transition-colors duration-300",
				active ? "text-mint" : "text-lightgrey/75 hover:text-lightgrey",
				className
			)}
		>
			{children}
			<span
				aria-hidden
				className={cn(
					"absolute inset-x-3 -bottom-0.5 h-px bg-mint transition-transform duration-300 origin-left",
					active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
				)}
			/>
		</Link>
	);
}

export default function Header() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	const pathname = usePathname();
	const reduce = usePrefersReducedMotion();

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		setOpen(false);
	}, [pathname]);

	useEffect(() => {
		if (open) stopScroll();
		else startScroll();
	}, [open ]);

	return (
		<>
			<motion.header
				initial={false}
				animate={{
					y: 0,
					opacity: 1,
				}}
				className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-6 sm:pt-4"
			>
				<div
					className={cn(
						"flex w-full max-w-5xl items-center justify-between gap-2 rounded-2xl border pl-4 pr-2 transition-all duration-500",
						scrolled
							? "border-lightgrey/15 bg-midnight/80 py-2 shadow-[0_18px_50px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl"
							: "border-transparent bg-midnight/20 py-3 backdrop-blur-md"
					)}
				>
					<Link
						href="/"
						className="flex shrink-0 items-center"
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
						{NAV.map((item) => (
							<NavLink key={item.href} href={item.href}>
								{item.label}
							</NavLink>
						))}
					</nav>

					<div className="flex items-center gap-2">
						<Link
							href="/cotizaciones"
							className="group hidden items-center gap-1.5 rounded-full bg-mint px-5 py-2.5 text-[13px] font-normal uppercase tracking-[0.16em] text-midnight transition-colors duration-300 hover:bg-lightgrey sm:inline-flex"
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
			</motion.header>

			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: reduce ? 0 : 0.3 }}
						className="fixed inset-0 z-[60] flex flex-col bg-midnight-deep/95 backdrop-blur-2xl lg:hidden"
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
												"group flex items-baseline gap-4 border-b border-lightgrey/10 py-4",
												active ? "text-mint" : "text-lightgrey"
											)}
										>
											<span className="font-display text-sm text-mint/70">
												0{i + 1}
											</span>
											<span className="font-display text-4xl font-medium uppercase leading-none tracking-tight">
												{item.label}
											</span>
											<ArrowUpRight
												className="ml-auto h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
												aria-hidden
											/>
										</Link>
									</motion.div>
								);
							})}
						</nav>

						<motion.div
							initial={{ opacity: 0, y: reduce ? 0 : 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: reduce ? 0 : 0.35, duration: 0.5 }}
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
