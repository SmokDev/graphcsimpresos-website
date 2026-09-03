"use client";

export function Marquee({
	items,
	speed = 24,
	className,
	itemClassName,
}: {
	items: string[];
	speed?: number;
	className?: string;
	itemClassName?: string;
}) {
	const doubled = [...items, ...items];
	return (
		<div className={`overflow-hidden whitespace-nowrap border-y border-lightgrey/10 bg-midnight ${className}`}>
			<div
				className="flex w-max animate-[marquee_linear_infinite]"
				style={{ animationDuration: `${speed}s` } as React.CSSProperties}
			>
				{doubled.map((it, i) => (
					<span key={i} className={`inline-flex items-center gap-6 px-6 py-4 text-[11px] tracking-[0.22em] uppercase text-lightgrey/60 ${itemClassName}`}>
						<span className="size-1 rounded-full bg-mint" aria-hidden />
						{it}
					</span>
				))}
			</div>
			<style>{`@keyframes marquee { 0% { transform: translateX(0) } 100% { transform: translateX(-50%) } } .animate-\\[marquee_linear_infinite\\] { animation: marquee linear infinite }`}</style>
		</div>
	);
}
