import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, Truck } from "lucide-react";
import { Container, Eyebrow, Section } from "@/components/ui/sections";
import Heading from "@/components/ui/heading";
import { CTA } from "@/components/ui/button";
import { SOLUTION_PAGES } from "@/utils/solution-pages";
import { SITE } from "@/utils/site";
import { SOLUTION_VISUALS } from "@/utils/solution-visuals";
import { SolutionScene, ScrollContent, GalleryParallax } from "@/components/soluciones/scroll-effects";

export const dynamicParams = false;
export function generateStaticParams() {
  return SOLUTION_PAGES.map(({ slug }) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = SOLUTION_PAGES.find((p) => p.slug === slug);
  if (!page) return {};
  const url = `/soluciones/${page.slug}`;
  const visual = SOLUTION_VISUALS[page.slug];
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: { title: `${page.title} · ${SITE.name}`, description: page.description, url,
      type: "website", locale: "es_MX", siteName: SITE.name,
      images: [{ url: visual.cover.src, alt: visual.cover.alt }] },
    twitter: { card: "summary_large_image", title: page.title, description: page.description, images: [visual.cover.src] }
  };
}

export default async function SolutionLanding({ params }: Props) {
  const { slug } = await params;
  const page = SOLUTION_PAGES.find((p) => p.slug === slug);
  if (!page) notFound();
  const quote = `/cotizaciones?solucion=${encodeURIComponent(page.name)}`;
  const visual = SOLUTION_VISUALS[page.slug];
  const url = `${SITE.baseUrl}/soluciones/${page.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "@id": `${url}#servicio`, name: page.title, description: page.description,
        url, image: new URL(visual.cover.src, SITE.baseUrl).href,
        areaServed: { "@type": "Country", name: "México" },
        provider: { "@type": "Organization", "@id": `${SITE.baseUrl}/#organization`, name: SITE.name, url: SITE.baseUrl } },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: SITE.baseUrl },
        { "@type": "ListItem", position: 2, name: "Soluciones", item: `${SITE.baseUrl}/soluciones` },
        { "@type": "ListItem", position: 3, name: page.name, item: url }
      ] }
    ]
  };
  return (
    <main className="bg-midnight text-lightgrey">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <SolutionScene mode="hero" src={visual.cover.src} alt={visual.cover.alt} labelledBy="solution-title" className="relative isolate flex min-h-svh flex-col justify-end overflow-hidden rounded-b-[2rem] border-b border-lightgrey/10 bg-midnight-deep">
        <Container className="relative pb-12 pt-32 sm:pb-16 sm:pt-40">
          <nav aria-label="Ruta de navegación" className="mb-12 flex flex-wrap gap-2 text-xs text-lightgrey/80 sm:mb-20">
            <Link href="/" className="hover:text-mint">Inicio</Link><span aria-hidden>/</span>
            <Link href="/soluciones" className="hover:text-mint">Soluciones</Link><span aria-hidden>/</span>
            <span aria-current="page" className="text-mint">{page.name}</span>
          </nav>
          <Eyebrow>{page.eyebrow}</Eyebrow>
          <h1 id="solution-title" className="max-w-5xl break-words font-display text-[clamp(2.2rem,6.5vw,6rem)] font-bold uppercase leading-[1.02] tracking-tight">{page.title}</h1>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-20">
            <p className="max-w-2xl leading-relaxed text-lightgrey/90 sm:text-lg">{page.intro}</p>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <CTA href={quote}>Solicitar cotización</CTA>
              <CTA href={page.catalogUrl ?? "#productos"} variant="ghost" target={page.catalogUrl ? "_blank" : undefined} rel={page.catalogUrl ? "noopener noreferrer" : undefined}>{page.catalogUrl ? "Explorar catálogo" : "Ver productos"}</CTA>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-lightgrey/20 pt-5">
            <p className="flex items-center gap-3 text-xs text-mint sm:text-sm"><Truck className="h-4 w-4 shrink-0" aria-hidden />Envíos a toda la República Mexicana</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-lightgrey/60">{visual.cover.caption} · Imagen ilustrativa</p>
          </div>
        </Container>
      </SolutionScene>

      <Section id="productos" aria-labelledby="productos-titulo" className="scroll-mt-24">
        <Container>
          <Eyebrow>Elige según lo que necesitas</Eyebrow>
          <Heading level={2} id="productos-titulo" className="max-w-3xl">{page.productsTitle ?? `${page.name} para tu proyecto.`}</Heading>
          <div className={visual.gallery.length === 3 ? "mt-12 grid gap-6 lg:grid-cols-3" : "mt-12 grid gap-6 lg:grid-cols-[1.35fr_1fr] lg:items-start lg:gap-10"}>
            {visual.gallery.map((photo, i) => (
              <ScrollContent key={photo.src} distance={i === 1 ? 48 : 28} className={visual.gallery.length === 2 && i === 1 ? "lg:pt-24" : undefined}>
                <figure>
                  <div className={`relative overflow-hidden rounded-2xl bg-midnight-deep ${i === 0 && !photo.preserveFrame ? "aspect-[4/3]" : "aspect-square"}`}>
                    <GalleryParallax src={photo.src} alt={photo.alt} className={photo.position ?? "object-cover"} preserveFrame={photo.preserveFrame} sizes={visual.gallery.length === 3 ? "(max-width: 1023px) 100vw, 33vw" : undefined} />
                  </div>
                  <figcaption className="mt-4 flex gap-4 text-sm leading-relaxed text-lightgrey/70"><span className="text-mint">0{i + 1}</span>{photo.caption}</figcaption>
                </figure>
              </ScrollContent>
            ))}
          </div>
          <p className="mt-5 text-xs leading-relaxed text-lightgrey/50">Referencias visuales e imágenes ilustrativas. Materiales, colores y acabados se confirman en tu cotización.</p>
          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {page.products.map((product, i) => (
              <ScrollContent key={product.name} distance={24 + (i % 2) * 12} className="h-full">
              <article className="h-full rounded-2xl border border-lightgrey/15 bg-midnight-deep p-7 sm:p-9">
                <span className="text-sm text-mint">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 text-xl font-bold sm:text-2xl">{product.name}</h3>
                <p className="mt-4 leading-relaxed text-lightgrey/75">{product.copy}</p>
              </article>
              </ScrollContent>
            ))}
          </div>
        </Container>
      </Section>

      {page.catalogUrl && (
        <Section aria-labelledby="catalogo-promocionales" className="border-y border-mint/20 bg-midnight-deep">
          <Container className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <Eyebrow>Ideas para cada ocasión</Eyebrow>
              <Heading level={2} id="catalogo-promocionales">Encuentra el artículo. Nosotros lo personalizamos.</Heading>
              <p className="mt-6 max-w-2xl leading-relaxed text-lightgrey/80">Explora el catálogo de productos promocionales y guarda las referencias que te interesen. Desde un regalo de bienvenida hasta un accesorio de bar, revisamos contigo qué opciones funcionan para tu marca.</p>
            </div>
            <div className="space-y-6 rounded-3xl border border-lightgrey/15 p-7 sm:p-10">
              <h3 className="text-xl font-bold">Del catálogo a tu cotización</h3>
              <ol className="list-inside list-decimal space-y-3 leading-relaxed text-lightgrey/80">
                <li>Elige un modelo y anota su referencia.</li>
                <li>Comparte cantidad, color y tu logotipo.</li>
                <li>Confirmamos disponibilidad, personalización y envío.</li>
              </ol>
              <CTA href={page.catalogUrl} target="_blank" rel="noopener noreferrer">Ver catálogo de promocionales</CTA>
              <p className="text-xs leading-relaxed text-lightgrey/60">El catálogo abre en otra pestaña. Existencias, precios y tiempos se confirman al cotizar.</p>
            </div>
          </Container>
        </Section>
      )}

      <SolutionScene src={visual.feature?.src ?? page.image} alt={visual.feature?.alt ?? page.alt} imagePosition={visual.feature?.position} className="relative isolate flex min-h-[55svh] items-end overflow-hidden bg-midnight-deep py-16 sm:min-h-[70svh] sm:py-24" labelledBy="marca-materializada">
        <Container>
          {visual.feature && <p className="mb-4 text-xs uppercase tracking-[0.2em] text-lightgrey/70">{visual.feature.caption} · Imagen ilustrativa</p>}
          <Eyebrow>Diseñamos tu idea, imprimimos tu éxito.</Eyebrow>
          <h2 id="marca-materializada" className="max-w-4xl text-4xl font-bold uppercase leading-tight tracking-tight sm:text-6xl">{visual.line}</h2>
        </Container>
      </SolutionScene>

      <Section aria-labelledby="criterio-titulo" className="border-y border-lightgrey/10 bg-midnight-deep">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow>Asesoría para decidir</Eyebrow>
            <Heading level={2} id="criterio-titulo">La opción adecuada empieza por el uso.</Heading>
            <p className="mt-6 leading-relaxed text-lightgrey/80">{page.advice}</p>
          </div>
          <div className="rounded-3xl border border-mint/25 p-7 sm:p-10">
            <h3 className="text-xl font-bold">¿Qué necesitamos para cotizar?</h3>
            <ul className="mt-7 space-y-5">
              {page.checklist.map((item) => <li key={item} className="flex gap-3 text-lightgrey/80"><Check className="mt-1 h-4 w-4 shrink-0 text-mint" aria-hidden /><span>{item}</span></li>)}
            </ul>
            <p className="mt-7 border-t border-lightgrey/15 pt-5 text-sm leading-relaxed text-lightgrey/65">¿Aún no tienes todo definido? Cuéntanos tu idea. Podemos ayudarte a revisar las opciones antes de confirmar especificaciones.</p>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="preguntas-titulo">
        <Container>
          <Eyebrow>Antes de comenzar</Eyebrow>
          <Heading level={2} id="preguntas-titulo">Resolvemos tus dudas.</Heading>
          <div className="mt-10 max-w-4xl divide-y divide-lightgrey/15 border-y border-lightgrey/15">
            {[...page.faq,
              { q: "¿Cuál es la cantidad mínima y el tiempo de entrega?", a: "Dependen del producto, los materiales, la personalización y la cantidad. Indica la fecha en que necesitas tu pedido para confirmar viabilidad, tiempos de producción y condiciones en la cotización." },
              { q: "¿Hacen envíos a toda la República Mexicana?", a: "Sí. Producimos en Atizapán de Zaragoza, Estado de México, y enviamos a todo el país. Comparte ciudad y código postal para confirmar costo y tiempo de traslado. El envío y la producción se revisan antes de cerrar el pedido." }
            ].map(({ q, a }) => (
              <details key={q} className="group py-6">
                <summary className="cursor-pointer text-base font-bold marker:text-mint sm:text-lg">{q}</summary>
                <p className="mt-4 max-w-3xl leading-relaxed text-lightgrey/75">{a}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      <section className="bg-mint py-20 text-midnight sm:py-28">
        <Container>
          <Eyebrow light>De la idea al pedido</Eyebrow>
          <h2 className="max-w-4xl text-3xl font-bold uppercase tracking-tight sm:text-5xl">Cuéntanos qué necesita tu marca.</h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-midnight/80">Comparte productos, cantidades y fecha deseada. Revisamos las opciones de producción y envío para preparar una propuesta para tu proyecto.</p>
          <CTA href={quote} variant="dark" className="mt-8">Solicitar cotización de {page.name.toLowerCase()}</CTA>
        </Container>
      </section>

      <Section aria-labelledby="relacionadas">
        <Container>
          <h2 id="relacionadas" className="text-2xl font-bold">Más formas de materializar tu marca</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {SOLUTION_PAGES.filter((p) => p.slug !== slug).map((p) => (
              <Link key={p.slug} href={`/soluciones/${p.slug}`} className="group flex items-center justify-between gap-5 rounded-2xl border border-lightgrey/15 p-6 hover:border-mint">
                <span className="font-bold">{p.name}</span><ArrowUpRight className="h-5 w-5 shrink-0 text-mint" aria-hidden />
              </Link>
            ))}
          </div>
        </Container>
      </Section>
      {page.installationScope && (
        <section aria-labelledby="alcance-instalacion" className="border-b border-lightgrey/15 bg-midnight-deep py-14 sm:py-20">
          <Container>
            <Eyebrow>Alcance del servicio</Eyebrow>
            <h2 id="alcance-instalacion" className="max-w-3xl text-2xl font-bold uppercase tracking-tight sm:text-3xl">Entrega e instalación: detalles de tu proyecto.</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {page.installationScope.map((item) => (
                <article key={item.title} className="rounded-2xl border border-mint/25 p-6 sm:p-8">
                  <h3 className="text-lg font-bold text-mint">{item.title}</h3>
                  <p className="mt-4 leading-relaxed text-lightgrey/85">{item.copy}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>
      )}

    </main>
  );
}
