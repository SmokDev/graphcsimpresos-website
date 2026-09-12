import { CTA } from "@/components/ui/button";
import { Container, Eyebrow } from "@/components/ui/sections";
import { Lines, Reveal } from "@/components/motion/reveal";
import { Drift, ScrollRise } from "@/components/motion/scroll";

/**
 * Cierre cinematográfico compartido (Home, Soluciones, Nosotros,
 * Presentación): colores del home, texto gigante en drift, reveals
 * por líneas que entran temprano y se quedan, botón pill del home.
 * Textos configurables por props.
 */
export default function SiteCTA({
	kicker = "Siguiente paso",
	title = ["¿Tienes una idea?", "Hagámosla realidad."],
	copy = "Cuéntanos qué necesitas y te ayudaremos a encontrar la mejor manera de convertirlo en una solución gráfica.",
	cta = "Solicitar cotización",
	backdrop,
}: {
	kicker?: string;
	title?: [string, string];
	copy?: string;
	cta?: string;
	backdrop?: string;
}) {
	const backWord = backdrop ?? title[1] ?? title[0];
	return (
		<section className="relative overflow-hidden bg-mint py-24 text-midnight sm:py-32 lg:py-40">
			<Drift
				from="1%"
				to="-22%"
				className="pointer-events-none absolute top-8 left-0 select-none sm:top-12"
			>
				<p
					aria-hidden
					className="whitespace-nowrap font-display text-[24vw] font-medium uppercase leading-none text-midnight/[0.07] lg:text-[16rem]"
				>
					{backWord} — {backWord}
				</p>
			</Drift>
			<Container className="relative">
				<Eyebrow light>{kicker}</Eyebrow>
				<h2 className="font-display text-[12.5vw] font-medium uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
					<Lines lines={title} delay={0.1} />
				</h2>
				<ScrollRise className="mt-8">
					<div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
						<p className="max-w-md text-base leading-relaxed text-midnight/75 sm:text-lg">
							{copy}
						</p>
						<Reveal delay={0.1}>
							<CTA href="/cotizaciones" variant="dark" className="px-10 py-4.5 text-sm">
								{cta}
							</CTA>
						</Reveal>
					</div>
				</ScrollRise>
			</Container>
		</section>
	);
}
