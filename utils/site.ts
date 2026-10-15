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
		title: "Papelería corporativa",
		headline: "Haz que tu marca esté presente en cada detalle.",
		description:
			"Tarjetas de presentación, folders, hojas membretadas y sobres para presentar tu empresa con una imagen coherente.",
		items: [
			"Tarjetas de presentación",
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
		headline: "Da presencia a tu campaña y a tu punto de venta.",
		description:
			"Volantes, flyers, pósters, folletos, catálogos y boletos para campañas y eventos. Danglers y cenefas para promoción en punto de venta.",
		items: [
			"Volantes y flyers",
			"Carteles y pósters",
			"Folletos",
			"Catálogos",
			"Boletos",
			"Revistas",
			"Danglers (colgantes publicitarios)",
			"Cenefas para anaqueles",
			"Artículos promocionales",
		],
		image: "/boleto.jpg",
	},
	{
		n: "03",
		slug: "packaging",
		title: "Empaques y etiquetas",
		headline: "Tu producto también comunica.",
		description: "Cajas, etiquetas y stickers personalizados para presentar tus productos y comunicar tu marca.",
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
	"Papelería corporativa",
	"Publicidad y promoción",
	"Empaques y etiquetas",
	"Uniformes y distintivos",
	"Otro",
] as const;
