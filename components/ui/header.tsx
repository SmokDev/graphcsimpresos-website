"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function NavLink({ ...props }: React.ComponentProps<typeof Link>) {
	return (
		<Link
			className="nav-link uppercase h-full flex items-center px-4 text-lightgrey text-center hover:text-mint transition-colors duration-200"
			{...props}
		/>
	);
}
export default function Header({ children }: { children?: React.ReactNode }) {
	const [open, setOpen] = useState(false);

	return (
		<header className="w-full h-16 bg-midnight flex items-center px-2 py-2 fixed z-50">
			{/* Logo - horizontal SVG */}
			<Link href="/" className="flex items-center h-full w-auto absolute left-2 p-1">
				<Image
					src="/Logo%20Lightgray.svg"
					alt="Graphics Impresos"
					width={180}
					height={44}
					className="h-full w-auto object-contain"
					priority
				/>
			</Link>
			{/* Desktop Navigation */}
			<nav className="flex-1 flex justify-center h-full">
				<div className="hidden md:flex gap-2 h-full">{children}</div>
			</nav>
			{/* Mobile Menu Button */}
			<button
				className="md:hidden ml-auto p-2"
				onClick={() => setOpen((o) => !o)}
				aria-label="Open menu"
			>
				<Menu className="w-7 h-7 text-lightgrey" />
			</button>
			{/* Mobile Navigation Drawer */}
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ opacity: 0, y: -40 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -40 }}
						transition={{ duration: 0.25 }}
						className="fixed text-center top-0 left-0 w-full h-full bg-midnight flex flex-col items-center justify-center z-50"
					>
						<button
							className="absolute top-4 right-4 p-2 cursor-pointer"
							onClick={() => setOpen(false)}
							aria-label="Close menu"
						>
							<X className="w-7 h-7 text-lightgrey" />
						</button>
						<Link href="/" className="mb-8" onClick={() => setOpen(false)}>
							<Image
								src="/Logo%20Lightgray.svg"
								alt="Graphics Impresos"
								width={220}
								height={54}
								className="h-12 w-auto object-contain"
							/>
						</Link>
						<nav className="flex flex-col gap-6" onClick={() => setOpen(false)}>{children}</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
