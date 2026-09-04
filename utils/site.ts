export const SITE = {
	name: "Graphics Impresos",
	tagline: "Diseñamos tu idea, imprimimos tu éxito.",
	phone: "55 8773 0703",
	phoneHref: "tel:+525587730703",
	email: "contacto@graphicsimpresos.com",
	site: "graphicsimpresos.com",
	address: "Mar Mediterráneo 30, Tacuba, Miguel Hidalgo, 11410 Ciudad de México, CDMX",
	baseUrl: "https://graphicsimpresos.com",
} as const;

export const SOLUTIONS = [
	{
		n: "01",
		slug: "identidad-corporativa",
		title: "Identidad corporativa",
		headline: "Haz que tu marca esté presente en cada detalle.",
		description:
			"Tarjetas, papelería, carpetas, sobres, formatos y materiales empresariales.",
		items: [
			"Tarjetas de presentación",
			"Papelería corporativa",
			"Carpetas",
			"Sobres",
			"Formatos empresariales",
			"Materiales personalizados",
		],
		image: "/background.webp",
	},
	{
		n: "02",
		slug: "publicidad-promocion",
		title: "Publicidad y promoción",
		headline: "Haz que tu mensaje llegue más lejos.",
		description:
			"Flyers, posters, brochures, catálogos y artículos promocionales.",
		items: [
			"Flyers",
			"Posters",
			"Brochures",
			"Catálogos",
			"Artículos promocionales",
		],
		image: "/offset.jpg",
	},
	{
		n: "03",
		slug: "packaging",
		title: "Packaging",
		headline: "Tu producto también comunica.",
		description: "Cajas, etiquetas, stickers y empaques.",
		items: ["Cajas", "Etiquetas", "Stickers", "Empaques personalizados"],
		image: "/background%202.webp",
	},
	{
		n: "04",
		slug: "uniformes",
		title: "Uniformes corporativos",
		headline: "Tu equipo también forma parte de tu marca.",
		description:
			"Uniformes y prendas personalizadas que ayudan a fortalecer la imagen de tu equipo.",
		items: [
			"Uniformes corporativos",
			"Prendas personalizadas",
			"Ropa para equipos",
		],
		image: "/background.webp",
	},
] as const;

export const QUOTE_TYPES = [
	"Identidad corporativa",
	"Publicidad y promoción",
	"Packaging",
	"Uniformes corporativos",
	"Otro",
] as const;
