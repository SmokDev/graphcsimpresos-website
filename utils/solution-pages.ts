import { SITE } from "@/utils/site";

export type SolutionPage = {
  slug: string; catalogSlug: string; name: string; title: string; description: string;
  intro: string; image: string; alt: string; eyebrow: string;
  catalogUrl?: string; productsTitle?: string;
  installationScope?: { title: string; copy: string }[];
  products: { name: string; copy: string }[];
  advice: string; checklist: string[]; faq: { q: string; a: string }[];
};

export const SOLUTION_PAGES: SolutionPage[] = [
  {
    "slug": "rotulos-y-gran-formato",
    "catalogSlug": "rotulos",
    "name": "Rótulos y gran formato",
    "title": "Banners, viniles, letreros y rótulos para tu negocio",
    "productsTitle": "Impresión en gran formato para tu negocio",
    "description": "Lonas, banners, viniles, rotulación de autos, impresión de gran formato, letras 3D y letreros luminosos para dar presencia a tu negocio.",
    "intro": "Haz visible tu marca en cada recorrido y en cada espacio. Creamos lonas, banners y viniles, rotulamos autos y ofrecemos impresión de gran formato, letras 3D y letreros luminosos para tu negocio.",
    "image": "/images/soluciones/rotulacion-vehicular.webp",
    "alt": "Rotulación de una camioneta con la identidad de la marca ficticia ALTO",
    "eyebrow": "Tu marca, en movimiento y a gran escala",
    "installationScope": [
      {
        "title": "Lonas, banners, viniles y gran formato",
        "copy": "Los impresos se entregan sin colocación ni montaje. La instalación de estas piezas corre por cuenta del cliente."
      },
      {
        "title": "Autos, letras 3D y letreros luminosos",
        "copy": "Rotulamos autos e instalamos letras 3D y letreros luminosos. Revisamos ubicación, condiciones del proyecto y fecha para definir alcance, cobertura y costo en la cotización."
      }
    ],
    "products": [
      {
        "name": "Rotulación de autos",
        "copy": "Convierte tu vehículo en una aplicación de marca. Comparte el modelo, fotografías de la unidad y tu diseño para revisar áreas de aplicación, medidas y opciones de vinil."
      },
      {
        "name": "Lonas y banners",
        "copy": "Comunica promociones, aperturas y eventos con piezas de lectura clara. Revisamos formato, medidas, material y terminados según el espacio y el uso de tu proyecto."
      },
      {
        "name": "Viniles impresos",
        "copy": "Lleva tus gráficos a superficies y aplicaciones de marca. Cuéntanos dónde se usará la pieza para revisar tipo de vinil, dimensiones y diseño."
      },
      {
        "name": "Letreros luminosos y letras 3D",
        "copy": "Dale volumen y presencia al nombre o logotipo de tu negocio. Revisamos diseños con y sin iluminación, dimensiones, materiales y acabados para definir una propuesta acorde con tu espacio."
      }
    ],
    "advice": "Para un auto, una fachada o un evento, cada superficie pide una solución distinta. Comparte fotografías del lugar o vehículo, medidas aproximadas y el uso que tendrá la pieza. Te ayudamos a revisar formato, material y adaptación del diseño antes de confirmar.",
    "checklist": [
      "Tipo de pieza, cantidad y medidas",
      "Logotipo, diseño o referencias visuales",
      "Fotografías del espacio o modelo y fotos del vehículo",
      "Uso interior o exterior, ciudad y fecha deseada"
    ],
    "faq": [
      {
        "q": "¿Pueden rotular un auto con mi marca?",
        "a": "Sí. Comparte el modelo y fotografías del vehículo, tu logotipo y una referencia del diseño que buscas. Revisamos las áreas de aplicación y el alcance de la rotulación para cotizar."
      },
      {
        "q": "¿Cómo elijo entre una lona y un banner?",
        "a": "Partimos del espacio y del uso: promoción de negocio, evento, presentación o campaña. Comparte medidas y una referencia para revisar el formato, el material y los terminados disponibles."
      },
      {
        "q": "¿Qué archivo necesito para gran formato o rotulación?",
        "a": "Envíanos el archivo que tengas y las medidas finales, o fotografías del vehículo si se trata de rotulación. Revisamos si requiere ajustes; el diseño o adaptación se cotizan según el alcance."
      },
      {
        "q": "¿Puedo conservar la misma identidad en distintos soportes?",
        "a": "Sí. Podemos revisar aplicaciones para tu vehículo, banners, viniles y letreros a partir de tu identidad. Cada soporte tiene dimensiones y posibilidades de reproducción propias."
      }
    ]
  },
  {
    slug: "promocionales-personalizados", catalogSlug: "promocionales", name: "Promocionales personalizados",
    title: "Artículos promocionales personalizados para tu marca",
    description: "Termos, plumas, agendas, calendarios, audífonos y accesorios de bar personalizados. Explora el catálogo y cotiza con envíos a todo México.",
    intro: "Tu marca también acompaña los momentos cotidianos. Personalizamos artículos para regalos de empresa, kits de bienvenida, eventos, campañas y espacios de trabajo. Elige según quién lo usará y para qué quieres entregarlo.",
    image: "/images/soluciones/promocionales-diario.webp", alt: "Kit ilustrativo de artículos personalizados: termo, botella, agenda, pluma, calendario y audífonos", eyebrow: "Tu marca, en lo que se usa todos los días",
    catalogUrl: SITE.promotionalCatalogUrl,
    products: [
      { name: "Termos, botellas y vasos", copy: "Artículos para acompañar al equipo, recibir a un nuevo cliente o complementar un evento. Revisamos capacidad, material, color y área de personalización según el modelo." },
      { name: "Plumas y artículos de escritura", copy: "Una opción para oficinas, congresos y entregas comerciales. Comparte la cantidad, el tipo de pluma y el acabado que buscas para revisar alternativas." },
      { name: "Agendas, libretas y calendarios", copy: "Lleva tu identidad a la organización diaria y los regalos de temporada. Elige formato, presentación y opciones de personalización según el artículo." },
      { name: "Audífonos y tecnología", copy: "Complementa regalos y kits con accesorios de uso cotidiano. Consulta modelos, características y posibilidades de aplicación de tu marca antes de elegir." },
      { name: "Accesorios de bar", copy: "Destapadores, shakers o cocteleras y otros artículos para marcas de hospitalidad, eventos y regalos. Confirmamos material y técnica de personalización para cada modelo." },
      { name: "Kits y otras ideas de regalo", copy: "Combina artículos de distintas familias para una bienvenida, un reconocimiento o una campaña. Explora el catálogo y comparte las referencias que te interesan para revisar opciones." }
    ],
    advice: "Un buen promocional empieza por la persona que lo recibe. Cuéntanos si es para uso diario, un evento o un regalo especial, y comparte tu presupuesto aproximado. Revisamos materiales, área de aplicación y técnica disponible según el producto; el precio final considera el artículo y el alcance de la personalización.",
    checklist: ["Referencia del catálogo o tipo de artículo", "Cantidad por modelo y color", "Logotipo, colores y zona de personalización", "Uso previsto, fecha deseada, ciudad y código postal"],
    faq: [
      { q: "¿Los artículos del catálogo se pueden personalizar?", a: "Personalizamos productos promocionales. Las posibilidades dependen del material, la forma y el área disponible en cada modelo. Envíanos la referencia y tu logotipo para confirmar técnica, alcance y costo antes de producir." },
      { q: "¿Solo sirven para publicidad?", a: "También pueden formar parte de regalos de empresa, kits de bienvenida, reconocimientos, eventos, materiales para equipos y accesorios para espacios de hospitalidad. Te ayudamos a revisar opciones según el uso y el destinatario." },
      { q: "¿Cómo cotizo un artículo que vi en el catálogo?", a: "Comparte su código o referencia, una captura si la tienes, la cantidad y el color deseado. Añade tu logotipo y la fecha en que lo necesitas. Revisamos disponibilidad y personalización para preparar la cotización." },
      { q: "¿El catálogo garantiza existencias y precios?", a: "El catálogo funciona como referencia para explorar opciones. Confirmamos existencias, colores, características, precios y tiempos al cotizar; pueden variar según el modelo y la cantidad." }
    ]
  },
  {
    slug: "papeleria-corporativa", catalogSlug: "identidad-corporativa", name: "Papelería corporativa",
    title: "Papelería corporativa personalizada para empresas",
    description: "Tarjetas de presentación, folders, hojas membretadas y sobres personalizados. Papelería corporativa con asesoría y envíos a todo México.",
    intro: "Presenta tu empresa con materiales que hablan el mismo idioma que tu marca. Te orientamos para elegir formato, papel y acabado según el uso de cada pieza, desde una primera reunión hasta una propuesta comercial.",
    image: "/papeleria%20corporatiav%202.webp", alt: "Composición de papelería corporativa con aplicaciones de identidad", eyebrow: "Una imagen coherente, en cada entrega",
    products: [
      { name: "Tarjetas de presentación", copy: "Comparte tus datos con una pieza que represente tu actividad. Revisamos contigo formato, información y opciones de acabado." },
      { name: "Folders y carpetas", copy: "Organiza propuestas, documentos y materiales de venta con una presentación alineada con tu empresa." },
      { name: "Hojas membretadas y sobres", copy: "Lleva tu identidad a presupuestos, cartas y correspondencia, cuidando la legibilidad de tus datos." },
      { name: "Formatos empresariales", copy: "Personaliza documentos de uso diario según la información y la función que necesita tu negocio." }
    ],
    advice: "Una tarjeta de uso frecuente y un folder para una presentación especial pueden necesitar papeles y acabados distintos. Partimos del uso y de tu presupuesto para revisar opciones; el diseño o la adaptación de archivos se cotizan según el alcance.",
    checklist: ["Piezas que necesitas y cantidad de cada una", "Logotipo, datos de contacto y archivos disponibles", "Medidas o referencias de formato", "Fecha deseada, ciudad y código postal"],
    faq: [
      { q: "¿Puedo pedir varias piezas con la misma identidad?", a: "Sí. Podemos revisar tarjetas, folders, hojas membretadas y sobres como un conjunto. Cada pieza se cotiza con sus propias medidas, cantidad y especificaciones." },
      { q: "¿Necesito tener el diseño terminado?", a: "Puedes compartir archivos listos o pedir diseño o adaptación. Antes de confirmar, definimos contigo qué trabajo se necesita y si tiene un costo adicional." },
      { q: "¿Qué papel y acabado me convienen?", a: "Depende del uso, la cantidad y el presupuesto. Comparte una referencia o cuéntanos cómo usarás tus materiales para revisar alternativas y su disponibilidad." }
    ]
  },
  {
    slug: "publicidad-y-promocion", catalogSlug: "publicidad-promocion", name: "Publicidad y promoción",
    title: "Publicidad impresa y materiales para punto de venta",
    description: "Flyers, pósters, folletos, boletos, revistas, danglers y cenefas para campañas y punto de venta. Cotiza tus impresos con envío a todo México.",
    intro: "Dale presencia física a tu campaña. Creamos materiales impresos para comunicar promociones, presentar productos y acompañar eventos, activaciones y espacios comerciales.",
    image: "/Flyers%20festival.webp", alt: "Diseños de flyers para una campaña publicitaria", eyebrow: "Tu mensaje, donde sucede la compra",
    products: [
      { name: "Volantes y flyers", copy: "Difunde promociones, aperturas o eventos. Elige el formato y la cantidad según dónde y cómo vas a distribuirlos." },
      { name: "Carteles y pósters", copy: "Haz visible tu mensaje en exhibidores, comercios y eventos. Comparte medidas, ubicación y distancia de lectura para revisar la pieza." },
      { name: "Folletos, catálogos y revistas", copy: "Presenta productos, servicios o contenidos con una secuencia clara. Cotizamos según formato, páginas, cantidad y terminados." },
      { name: "Boletos impresos", copy: "Prepara materiales para tus eventos. Indica cantidad, medidas y los datos o controles que necesita tu proyecto para revisar su viabilidad." },
      { name: "Danglers y cenefas", copy: "Colgantes publicitarios y piezas para anaqueles que acompañan promociones en punto de venta. Definimos medidas y opciones de material según el espacio." },
      { name: "Artículos promocionales", copy: "Complementa tu campaña con objetos personalizados. Consulta opciones, cantidades y técnicas disponibles para cada artículo." }
    ],
    advice: "En retail, la pieza debe adaptarse al lugar donde se exhibe. Comparte fotografías del espacio, medidas y la duración prevista de la campaña. Así podemos revisar materiales, formato y posibilidades de producción para tus impresos de punto de venta.",
    checklist: ["Objetivo de la campaña y piezas necesarias", "Cantidad, medidas y archivos o referencias", "Ubicación de las piezas y uso interior o exterior", "Fecha del evento o campaña y destino del envío"],
    faq: [
      { q: "¿Producen materiales para activaciones y retail?", a: "Sí, revisamos impresos como pósters, danglers y cenefas para campañas, activaciones y punto de venta. El servicio se refiere a la producción de materiales; cualquier necesidad de montaje o instalación debe consultarse por separado." },
      { q: "¿Pueden adaptar una campaña a distintos formatos?", a: "Podemos revisar la adaptación de tus archivos a las piezas que necesites. El alcance y costo de diseño se definen en la cotización." },
      { q: "¿Cómo cotizo un catálogo o revista?", a: "Indica tamaño cerrado, número de páginas, cantidad y si ya tienes el diseño. Revisamos opciones de papel y terminados antes de confirmar las especificaciones." }
    ]
  },
  {
    slug: "empaques-y-etiquetas", catalogSlug: "packaging", name: "Empaques y etiquetas",
    title: "Empaques y etiquetas personalizados para tu marca",
    description: "Cajas, empaques, etiquetas y stickers personalizados para presentar tus productos. Revisa materiales y opciones de packaging con envíos a todo México.",
    intro: "La presentación también forma parte de tu producto. Desarrollamos empaques, cajas y etiquetas que llevan tu identidad a lo que el cliente recibe, abre y conserva.",
    image: "/packaging%20premium.webp", alt: "Composición de empaques personalizados y presentación de producto", eyebrow: "Una marca que se puede tocar",
    products: [
      { name: "Cajas personalizadas", copy: "Revisamos formato y medidas según tu producto y su presentación. Comparte dimensiones, peso y una referencia para evaluar opciones." },
      { name: "Etiquetas para productos", copy: "Identifica tu producto y comunica su información. El material se revisa según la superficie y las condiciones de uso." },
      { name: "Stickers y adhesivos", copy: "Añade identidad a bolsas, cajas y entregas. Consulta tamaños, formas y opciones de material para tu aplicación." },
      { name: "Empaques de marca", copy: "Integra diseño y presentación en una pieza física. Revisamos las necesidades de estructura, impresión y acabado de cada proyecto." }
    ],
    advice: "La apariencia es una parte de la decisión. También necesitamos saber qué contiene el empaque, cómo se manipula y dónde se usará la etiqueta. Si hay humedad, refrigeración o contacto con alimentos, indícalo para revisar materiales y requisitos antes de cotizar.",
    checklist: ["Medidas, peso y tipo de producto", "Cantidad y referencia de caja o etiqueta", "Superficie y condiciones de uso", "Diseño disponible, fecha y destino de entrega"],
    faq: [
      { q: "¿Puedo solicitar un empaque a medida?", a: "Sí, podemos evaluar tu proyecto. Comparte las dimensiones del producto y una referencia. Confirmamos posibilidades de formato, material, cantidad y producción antes de cerrar la cotización." },
      { q: "¿Qué etiqueta funciona para mi producto?", a: "Depende de la superficie, el uso y la exposición a humedad o temperatura. Cuéntanos esas condiciones para revisar las opciones disponibles, sin asumir que cualquier adhesivo funciona en todos los productos." },
      { q: "¿Hay pruebas o muestras antes de producir?", a: "Las opciones de prueba dependen del proyecto. Definimos contigo disponibilidad, costo, alcance y qué aspectos permite revisar cada prueba antes de producir." }
    ]
  },
  {
    slug: "uniformes-y-distintivos", catalogSlug: "uniformes", name: "Uniformes y distintivos",
    title: "Uniformes y distintivos personalizados para tu equipo",
    description: "Uniformes, camisas, playeras, polos, mandiles, gafetes, botones y pines personalizados para empresas y eventos. Envíos a toda la República Mexicana.",
    intro: "Haz que tu equipo sea reconocible en cada interacción. Integra tu marca en prendas de trabajo y distintivos para atención al cliente, eventos, comercios y campañas.",
    image: "/uniformes-distintivos-personalizados.webp", alt: "Mockup de camisas, playeras, polo, mandil, gafetes, botones y pines personalizados", eyebrow: "Tu identidad también viste a tu equipo",
    products: [
      { name: "Camisas y uniformes", copy: "Presenta a tu equipo con prendas alineadas con su actividad. Comparte el tipo de prenda, tallas, cantidades y ubicación de la personalización." },
      { name: "Playeras y polos", copy: "Opciones para equipos, campañas y eventos. Revisamos colores, tallas y posibilidades de aplicación de tu diseño." },
      { name: "Mandiles", copy: "Una aplicación de marca para restaurantes, cafeterías, comercios y talleres. Definimos modelo y personalización según el uso." },
      { name: "Gafetes", copy: "Identifica a tu personal o participantes. Indica medidas, datos variables y si necesitas accesorios para revisar las opciones." },
      { name: "Botones publicitarios", copy: "Botones con broche para campañas, eventos e identificación. Comparte diseño, cantidad y tamaño deseado." },
      { name: "Pines personalizados", copy: "Añade un distintivo a tu equipo o campaña. Consulta opciones de formato, material y personalización según tu proyecto." }
    ],
    advice: "No todas las prendas o superficies se personalizan del mismo modo. Revisamos el diseño, el tamaño de la aplicación y el uso previsto para confirmar la técnica disponible. En pedidos con varias tallas o nombres, conviene validar la lista completa antes de producir.",
    checklist: ["Prendas o distintivos y cantidad por modelo", "Tallas, colores y nombres o datos variables", "Logotipo y lugar de aplicación del diseño", "Fecha del evento, ciudad y código postal"],
    faq: [
      { q: "¿Puedo combinar prendas y distintivos en un pedido?", a: "Sí. Podemos revisar camisas, playeras, mandiles, gafetes, botones y pines para el mismo proyecto. Cada producto tiene sus propias especificaciones, disponibilidad y tiempos." },
      { q: "¿Qué técnica de personalización utilizan?", a: "La técnica se confirma según la prenda, el material, el diseño y la cantidad. Comparte tu logotipo y una referencia para evaluar las opciones disponibles en la cotización." },
      { q: "¿Pueden personalizar nombres en gafetes?", a: "Podemos revisar proyectos con datos variables. Comparte qué información llevará cada gafete y la cantidad. Acordamos el formato de la lista y la aprobación de datos antes de producir." }
    ]
  }
];

