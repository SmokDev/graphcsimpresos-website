import * as React from "react";

export default function Button({
	children,
	className,
	type = "button",
	...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			type={type}
			className={`inline-flex items-center justify-center rounded-full bg-mint px-8 py-3.5 text-[12px] tracking-[0.16em] uppercase font-semibold text-midnight hover:bg-lightgrey transition-colors duration-300 disabled:opacity-50 disabled:pointer-events-none ${className ?? ""}`}
			{...props}
		>
			{children}
		</button>
	);
}
