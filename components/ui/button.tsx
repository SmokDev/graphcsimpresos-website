import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/utils/cn";

type Common = {
	children: React.ReactNode;
	className?: string;
	variant?: "solid" | "ghost" | "dark";
	arrow?: boolean;
};

/** Primary pill CTA — mint on midnight. */
export function CTA({
	children,
	className,
	variant = "solid",
	arrow = true,
	...props
}: Common & React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
	return (
		<Link
			className={cn(
				"group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[13px] uppercase tracking-[0.18em] transition-colors duration-300",
				variant === "solid" && "bg-mint text-midnight hover:bg-lightgrey",
				variant === "ghost" &&
					"border border-lightgrey/25 text-lightgrey hover:border-mint hover:text-mint",
				variant === "dark" && "bg-midnight text-lightgrey hover:bg-midnight-soft",
				className
			)}
			{...props}
		>
			{children}
			{arrow && (
				<ArrowUpRight
					className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
					aria-hidden
				/>
			)}
		</Link>
	);
}

/** Text link with animated underline — secondary actions. */
export function TextLink({
	children,
	className,
	...props
}: Common & React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
	return (
		<Link
			className={cn(
				"group inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.2em] text-lightgrey/85 transition-colors hover:text-mint",
				className
			)}
			{...props}
		>
			<span className="border-b border-lightgrey/25 pb-1 transition-colors group-hover:border-mint">
				{children}
			</span>
			<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
		</Link>
	);
}

/**
 * Legacy `Button` — kept so existing imports keep working.
 * Renders a <button>; for navigation prefer `CTA`.
 */
export default function Button({
	children,
	className,
	...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			className={cn(
				"inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-mint px-8 py-3 text-[13px] uppercase tracking-[0.18em] text-midnight transition-colors duration-300 hover:bg-lightgrey disabled:cursor-not-allowed disabled:opacity-60",
				className
			)}
			{...props}
		>
			{children}
		</button>
	);
}
