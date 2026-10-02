export const SITE = {
	name: "Graphics Impresos",
	tagline: "Diseñamos tu idea, imprimimos tu éxito.",
	phone: "56 5722 9563",
	phoneHref: "tel:+525657229563",
	email: "contacto@graphicsimpresos.com",
	site: "graphicsimpresos.com",
	address: "Atizapán de Zaragoza, Estado de México",
	baseUrl: "https://graphicsimpresos.com",
	// Clave de FormSubmit para el formulario de cotizaciones (evita exponer
	// el correo en el HTML y es el endpoint ya activado).
	formSubmitKey: "85a71d701a461f21fffcd52def86babf",
} as const;

export const SOLUTIONS = [
	{
		n: "01",
		slug: "identidad-corporativa",
		title: "Identidad corporativa",
		headline: "Haz que tu marca esté presente en cada detalle.",
		description:
			"Tarjetas, folders, hojas membretadas, sobres y materiales empresariales.",
		items: [
			"Tarjetas",
			"Folders",
			"Hojas membretadas",
			"Sobres",
			"Formatos empresariales",
			"Materiales personalizados",
		],
		image: "/papeleria%20corporativa.webp",
	},
	{
		n: "02",
		slug: "publicidad-promocion",
		title: "Publicidad y promoción",
		headline: "Haz que tu mensaje llegue más lejos.",
		description:
			"Flyers, posters, brochures, catálogos, boletos y artículos promocionales.",
		items: [
			"Flyers",
			"Posters",
			"Brochures",
			"Catálogos",
			"Boletos",
			"Artículos promocionales",
		],
		image: "/boleto.jpg",
	},
	{
		n: "03",
		slug: "packaging",
		title: "Packaging",
		headline: "Tu producto también comunica.",
		description: "Cajas, etiquetas, stickers y empaques.",
		items: ["Cajas", "Etiquetas", "Stickers", "Empaques personalizados"],
		image: "/packaging%20colorido.webp",
	},
	{
		n: "04",
		slug: "uniformes",
		title: "Uniformes y distintivos",
		headline: "Tu equipo también forma parte de tu marca.",
		description: "Uniformes, prendas personalizadas, gafetes y pines.",
		items: ["Uniformes", "Prendas personalizadas", "Gafetes", "Pines"],
		image: "/mandil%20cafe.webp",
	},
] as const;

export const QUOTE_TYPES = [
	"Identidad corporativa",
	"Publicidad y promoción",
	"Packaging",
	"Uniformes y distintivos",
	"Otro",
] as const;
