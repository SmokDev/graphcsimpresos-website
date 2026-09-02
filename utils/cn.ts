// Utility function for conditional class names
export function cn(...classes: (string | undefined)[]) {
	return classes.filter(Boolean).join(" ");
}
