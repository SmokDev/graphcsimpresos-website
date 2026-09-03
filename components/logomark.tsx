import Image from "next/image";

type LogoColor = "midnight" | "mint" | "lightgray";

interface LogomarkProps
	extends Omit<React.ComponentProps<typeof Image>, "src" | "alt"> {
	/**
	 * Color del logotipo horizontal
	 * - midnight:  #002855 sobre fondo claro (lightgrey)
	 * - mint:      #00BFB2 sobre fondo oscuro
	 * - lightgray: #D9D9D6 sobre fondo oscuro (midnight)
	 */
	color?: LogoColor;
	alt?: string;
}

const LOGO_SRC: Record<LogoColor, string> = {
	midnight: "/Logo%20Midnight%20blue.svg",
	mint: "/Logo%20Mint.svg",
	lightgray: "/Logo%20Lightgray.svg",
};

/**
 * Logomark - Logotipo horizontal de Graphics Impresos
 * Utiliza las imágenes SVG enlazadas de /public:
 * - Logo Midnight blue.svg
 * - Logo Mint.svg
 * - Logo Lightgray.svg
 *
 * @example <Logomark color="mint" width={180} height={44} />
 * @example <Logomark color="lightgray" className="h-12 w-auto" />
 * @example <Logomark color="midnight" />
 */
export default function Logomark({
	color = "midnight",
	alt = "Graphics Impresos",
	width = 320,
	height = 80,
	className,
	priority,
	...props
}: LogomarkProps) {
	const src = LOGO_SRC[color] ?? LOGO_SRC.midnight;

	return (
		<Image
			src={src}
			alt={alt}
			width={width}
			height={height}
			className={className ?? "w-full h-auto object-contain"}
			priority={priority}
			{...props}
		/>
	);
}
