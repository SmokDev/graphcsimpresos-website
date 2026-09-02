"use client";

import React from "react";
import Link from "next/link";
import Logomark from "../logomark";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function NavLink({ ...props }: React.ComponentProps<typeof Link>) {
	return (
		<Link
			className="nav-link uppercase h-full flex items-center px-4 text-gris text-center hover:text-blanco hover:bg-dorado transition-colors duration-200"
			{...props}
		/>
	);
}
export default function Header({ children }: { children?: React.ReactNode }) {
	const [open, setOpen] = useState(false);

	return (
		<header className="w-full h-16 bg-blanco bg-opacity-90 flex items-center px-2 py-2 fixed z-50">
			{/* Logomark */}
			<div className="flex items-center h-full w-auto absolute left-2 p-1">
				<Logomark className="h-full w-auto" />
			</div>
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
				<Menu className="w-7 h-7 text-gris" />
			</button>
			{/* Mobile Navigation Drawer */}
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ opacity: 0, y: -40 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -40 }}
						transition={{ duration: 0.25 }}
						className="fixed text-center top-0 left-0 w-full h-full bg-blanco bg-opacity-95 flex flex-col items-center justify-center z-50"
					>
						<button
							className="absolute top-4 right-4 p-2 cursor pointer"
							onClick={() => setOpen(false)}
							aria-label="Close menu"
						>
							<X className="w-7 h-7 text-gris rotate-90" />
						</button>
						<nav className="flex flex-col gap-6">{children}</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
