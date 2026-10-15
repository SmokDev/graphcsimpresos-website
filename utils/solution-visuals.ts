type Visual = { src: string; alt: string; caption: string; position?: string; preserveFrame?: boolean };
type SolutionVisuals = { cover: Visual; feature?: Visual; line: string; gallery: Visual[] };

export const SOLUTION_VISUALS: Record<string, SolutionVisuals> = {
  "rotulos-y-gran-formato": {
    cover: { src: "/images/soluciones/cover-rotulos-v4.webp", alt: "Fachada azul con letras luminosas NOVA, ventanal rotulado y banner con gráficos mint", caption: "Rotulación, banners y presencia de marca" },
    line: "Haz que tu negocio se vea.",
    feature: { src: "/images/soluciones/cover-rotulos-v2.webp", alt: "Vehículo y fachada rotulados de la marca ficticia RUMBO al anochecer", caption: "RUMBO · Marca ficticia", position: "object-right-top" },
    gallery: [
      { src: "/images/soluciones/rotulos-alto-cuadrada.webp", alt: "Vehículo y ventana rotulados con la identidad de la marca ficticia ALTO", caption: "Tu marca en movimiento y en los cristales de tu negocio.", position: "object-contain", preserveFrame: true },
      { src: "/images/soluciones/rotulos-faro-cuadrada.webp", alt: "Banners, lona y acceso de vidrio con rotulación de la marca ficticia FARO", caption: "Banners y viniles para comunicar en cada espacio.", position: "object-contain", preserveFrame: true },
      { src: "/images/soluciones/rotulos-lumia-cuadrada.webp", alt: "Café LUMIA con letrero de letras luminosas y detalle de rotulación en vidrio", caption: "Letreros luminosos y letras 3D para darle presencia a tu negocio.", position: "object-contain", preserveFrame: true }
    ]
  },
  "promocionales-personalizados": {
    cover: { src: "/images/soluciones/cover-promocionales.webp", alt: "Composición ilustrativa en azul y mint de termo, botella, pluma, agenda, calendario, audífonos y accesorios de bar", caption: "Regalos, eventos y uso diario" },
    line: "Más usos. Más momentos para tu marca.",
    feature: { src: "/images/soluciones/promocionales-bar.webp", alt: "Shaker, destapador y vaso personalizados de la marca ficticia BRAVIO", caption: "BRAVIO · Marca ficticia" },
    gallery: [
      { src: "/images/soluciones/promocionales-diario.webp", alt: "Kit de regalo de la marca ficticia NUVIA con termo, botella, agenda, pluma, calendario y audífonos", caption: "Regalos y kits para acompañar el día a día." },
      { src: "/images/soluciones/promocionales-belleza.webp", alt: "Kit ilustrativo AURELA con cosmetiquera, espejo, cepillo, brochas, bálsamo labial y crema de manos personalizados", caption: "Belleza y cuidado personal para regalos con identidad." }
    ]
  },
  "papeleria-corporativa": {
    cover: { src: "/images/soluciones/cover-papeleria.webp", alt: "Composición ilustrativa de tarjetas, folders, sobres y papelería en azul y mint", caption: "Papelería corporativa" },
    feature: { src: "/images/soluciones/papeleria-nubora.webp", alt: "Papelería de la marca ficticia NUBORA: tarjetas, folder, hoja membretada y sobre", caption: "NUBORA · Marca ficticia" },
    line: "El primer contacto también se siente.",
    gallery: [
      { src: "/papeleria%20corporatiav%202.webp", alt: "Aplicaciones coordinadas de una identidad en papelería corporativa", caption: "Una identidad. Distintas formas de presentarte." },
      { src: "/papeleria%20corporativa.webp", alt: "Detalle de materiales de papelería y presentación empresarial", caption: "Formato, papel y acabado, elegidos para cada uso." }
    ]
  },
  "publicidad-y-promocion": {
    cover: { src: "/images/soluciones/cover-publicidad.webp", alt: "Escena ilustrativa de publicidad en tienda con póster, danglers y cenefas", caption: "Campañas y punto de venta" },
    feature: { src: "/images/soluciones/retail-citrina.webp", alt: "Anaqueles de la marca ficticia CITRINA con cenefas y danglers promocionales", caption: "CITRINA · Marca ficticia" },
    line: "Tu campaña merece hacerse visible.",
    gallery: [
      { src: "/Flyers%20festival.webp", alt: "Flyers con diseño de campaña para promoción de un evento", caption: "Del mensaje a la pieza que llega a tus clientes." },
      { src: "/boleto.jpg", alt: "Composición de boletos impresos para eventos", caption: "Impresos para acompañar cada momento de tu evento." }
    ]
  },
  "empaques-y-etiquetas": {
    cover: { src: "/images/soluciones/cover-empaques.webp", alt: "Composición ilustrativa de cajas, etiquetas, stickers y empaques de producto", caption: "Presentación de producto" },
    feature: { src: "/images/soluciones/packaging-montal.webp", alt: "Empaque de café de la marca ficticia MONTAL con diseño en terracota y burgundy", caption: "MONTAL · Marca ficticia" },
    line: "La experiencia empieza antes de abrir.",
    gallery: [
      { src: "/packaging%20premium.webp", alt: "Ejemplo visual de empaques con aplicaciones de identidad de marca", caption: "Una presentación que forma parte del producto." },
      { src: "/packaging%20colorido.webp", alt: "Composición de empaques y cajas con diseños de color", caption: "Color y estructura para expresar tu identidad." }
    ]
  },
  "uniformes-y-distintivos": {
    cover: { src: "/images/soluciones/cover-uniformes.webp", alt: "Composición ilustrativa de camisas, polos, playeras, mandiles, gafetes, botones y pines", caption: "Equipo e identificación" },
    line: "Una marca que acompaña a tu equipo.",
    gallery: [
      { src: "/playera%20nova%20craft.webp", alt: "Playera amarilla personalizada con la identidad de Nova Craft", caption: "Prendas y distintivos que hablan el mismo idioma.", position: "object-cover object-top" },
      { src: "/mandil%20cafe.webp", alt: "Ejemplo visual de un mandil personalizado para una cafetería", caption: "Tu identidad, en los detalles del trabajo diario." }
    ]
  }
};
