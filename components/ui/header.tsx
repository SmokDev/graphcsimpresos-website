"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logomark from "../logomark";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function NavLink({ href, children, ...props }: React.ComponentProps<typeof Link>) {
	const pathname = usePathname();
	const isActive = pathname === href;
	return (
		<Link
			href={href}
			className={`relative uppercase tracking-[0.14em] text-[11px] font-medium px-4 py-2 rounded-full transition-colors duration-300 ${
				isActive ? "text-midnight bg-mint" : "text-lightgrey/80 hover:text-lightgrey hover:bg-lightgrey/10"
			}`}
			{...props}
		>
			{children}
		</Link>
	);
}

export default function Header({ children }: { children?: React.ReactNode }) {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	// lock body scroll when drawer open
	useEffect(() => {
		if (open) document.documentElement.classList.add("lenis-stopped");
		else document.documentElement.classList.remove("lenis-stopped");
		return () => document.documentElement.classList.remove("lenis-stopped");
	}, [open]);

	return (
		<>
			<motion.header
				initial={{ y: -30, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
				className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pointer-events-none"
			>
				<div
					className={`pointer-events-auto mt-4 flex items-center gap-2 rounded-full border px-2 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.24)] backdrop-blur-xl transition-all duration-500
					${scrolled
						? "bg-midnight/85 border-lightgrey/15 shadow-[0_8px_40px_rgba(0,0,0,0.35)]"
						: "bg-midnight/10 border-lightgrey/10 bg-blur"}
					w-full max-w-[1080px] justify-between md:justify-between`}
					style={{
						backdropFilter: "blur(16px) saturate(140%)",
						WebkitBackdropFilter: "blur(16px) saturate(140%)",
					}}
				>
					{/* Logo */}
					<Link href="/" className="flex items-center pl-2 pr-2 shrink-0">
						<Logomark color="lightgray" width={150} height={36} className="h-[30px] md:h-[34px] w-auto object-contain" priority />
						<span className="hidden lg:block ml-3 h-6 w-px bg-lightgrey/15" />
						<span className="hidden lg:block ml-3 text-[10px] leading-none tracking-[0.22em] uppercase text-lightgrey/60">
							25 años
							<br />
							<span className="text-mint">materializando ideas</span>
						</span>
					</Link>

					{/* Desktop Nav */}
					<nav className="hidden md:flex items-center gap-1">{children}</nav>

					{/* Right cluster */}
					<div className="flex items-center gap-2">
						<Link
							href="/cotizaciones"
							className="hidden md:inline-flex items-center gap-2 rounded-full bg-mint text-midnight px-5 py-2 text-[11px] tracking-[0.16em] uppercase font-semibold hover:bg-lightgrey transition-colors duration-300"
						>
							<span className="size-1.5 rounded-full bg-midnight animate-pulse" />
							Cotizar
						</Link>
						<button
							onClick={() => setOpen((o) => !o)}
							aria-label={open ? "Cerrar menú" : "Abrir menú"}
							aria-expanded={open}
							className="md:hidden size-10 grid place-items-center rounded-full bg-lightgrey/10 border border-lightgrey/10 text-lightgrey hover:bg-mint hover:text-midnight hover:border-mint transition-colors"
						>
							<Menu className={`size-5 transition ${open ? "opacity-0" : "opacity-100"}`} />
						</button>
					</div>
				</div>
			</motion.header>

			{/* Mobile Drawer */}
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="fixed inset-0 z-[60] md:hidden"
					>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="absolute inset-0 bg-midnight/90 backdrop-blur-2xl"
							onClick={() => setOpen(false)}
						/>
						<motion.div
							initial={{ y: "100%" }}
							animate={{ y: 0 }}
							exit={{ y: "100%" }}
							transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
							className="absolute inset-x-0 bottom-0 top-16 bg-midnight border-t border-lightgrey/10 rounded-t-[28px] overflow-hidden flex flex-col"
						>
							<div className="flex items-center justify-between px-6 py-5 border-b border-lightgrey/10">
								<Logomark color="lightgray" width={150} height={36} className="h-7 w-auto" />
								<button
									onClick={() => setOpen(false)}
									aria-label="Cerrar menú"
									className="size-10 grid place-items-center rounded-full bg-lightgrey text-midnight"
								>
									<X className="size-5" />
								</button>
							</div>

							<div className="flex-1 px-6 py-8 flex flex-col">
								<nav className="flex flex-col gap-2">
									{React.Children.map(children, (child) => {
										if (!React.isValidElement(child)) return child;
										// clone to enlarge typography
										return (
											<div className="[&>a]:text-[28px] [&>a]:tracking-tight [&>a]:normal-case [&>a]:font-light [&>a]:py-3 [&>a]:px-0 [&>a]:rounded-none [&>a]:bg-transparent [&>a]:justify-start [&>a]:text-lightgrey [&>a:hover]:text-mint [&>a:hover]:bg-transparent">
												{child}
											</div>
										);
									})}
								</nav>

								<div className="mt-auto space-y-4">
									<div className="h-px bg-lightgrey/10" />
									<p className="text-sm text-lightgrey/60 leading-relaxed">
										Cuéntanos qué necesitas lograr.
										<br />
										Nosotros lo hacemos tangible.
									</p>
									<Link
										href="/cotizaciones"
										onClick={() => setOpen(false)}
										className="flex items-center justify-center gap-3 w-full rounded-full bg-mint text-midnight py-4 text-sm tracking-[0.14em] uppercase font-semibold"
									>
										Solicitar cotización →
									</Link>
									<div className="flex justify-between text-[11px] tracking-widest uppercase text-lightgrey/40 pt-2">
										<span>55 8773 0703</span>
										<span>CDMX · 25 años</span>
									</div>
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
