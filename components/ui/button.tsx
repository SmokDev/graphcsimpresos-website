export default function Button({
	children,
	className,
	...props
}: React.HTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			className={`px-8 py-2 bg-foreground cursor-pointer text-base hover:bg-accent hover:text-accent-foreground rounded-md uppercase transition-colors duration-200 ${className}`}
			{...props}
		>
			{children}
		</button>
	);
}
