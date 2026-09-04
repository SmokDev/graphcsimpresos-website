import Heading from "@/components/ui/heading";
import { CTA } from "@/components/ui/button";
import { Container, Eyebrow } from "@/components/ui/sections";
import { Lines, Reveal } from "@/components/motion/reveal";

/** Shared cinematic closing CTA — same story ending on every page. */
export default function SiteCTA({
	kicker = "Siguiente paso",
	title = ["¿Tienes una idea?", "Hagámosla realidad."],
	copy = "Cuéntanos qué necesitas y te ayudaremos a encontrar la mejor manera de convertirlo en una solución gráfica.",
	cta = "Solicitar cotización",
}: {
	kicker?: string;
	title?: [string, string];
	copy?: string;
	cta?: string;
}) {
	return (
		<section className="relative overflow-hidden bg-mint py-20 text-midnight sm:py-28 lg:py-32">
			<p
				aria-hidden
				className="pointer-events-none absolute -bottom-6 left-0 select-none whitespace-nowrap font-display text-[22vw] font-medium uppercase leading-none text-midnight/[0.06] lg:text-[13rem]"
			>
				Cotiza — Cotiza
			</p>
			<Container className="relative">
				<Eyebrow light>{kicker}</Eyebrow>
				<Heading level={2} className="max-w-4xl">
					<Lines lines={title} />
				</Heading>
				<Reveal delay={0.15}>
					<p className="mt-6 max-w-xl text-base leading-relaxed text-midnight/75 sm:text-lg">
						{copy}
					</p>
				</Reveal>
				<Reveal delay={0.22}>
					<div className="mt-9">
						<CTA href="/cotizaciones" variant="dark">
							{cta}
						</CTA>
					</div>
				</Reveal>
			</Container>
		</section>
	);
}
