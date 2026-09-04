import { CTA } from "./ui/button";
import Heading from "./ui/heading";
import { Container, Eyebrow } from "./ui/sections";

/** Slim interstitial banner — links to the quote page. */
export default function AlgunProyecto() {
	return (
		<section className="relative w-full overflow-hidden bg-midnight-deep">
			<Container className="flex flex-col items-start gap-5 py-16 sm:py-20">
				<Eyebrow>Da el siguiente paso</Eyebrow>
				<Heading level={2} className="max-w-2xl">
					¿Listo para imprimir tu próximo proyecto?
				</Heading>
				<p className="max-w-lg leading-relaxed text-lightgrey/75">
					Cuéntanos tu idea y recibe una cotización personalizada sin
					compromiso. Estamos listos para ayudarte a llevar tu idea al papel.
				</p>
				<CTA href="/cotizaciones">Solicitar cotización</CTA>
			</Container>
		</section>
	);
}

// Re-export the site-wide cinematic CTA as the default closing block.
export { default as SiteClosingCTA } from "./site-cta";
