import { Container, Eyebrow, Section } from "@/components/ui/sections";
import Heading from "@/components/ui/heading";
import { Lines, Reveal } from "@/components/motion/reveal";

export const WORK_STEPS = [
	{ n: "01", title: "Entendemos", copy: "Conocemos tu necesidad y objetivo." },
	{ n: "02", title: "Asesoramos", copy: "Te ayudamos a definir la solución adecuada." },
	{ n: "03", title: "Diseñamos", copy: "Desarrollamos o adaptamos la propuesta." },
	{ n: "04", title: "Prototipamos", copy: "Creamos pruebas de impresión para validar la propuesta." },
	{ n: "05", title: "Producimos", copy: "Convertimos la idea en una pieza física." },
];

/** Sección "Cómo trabajamos" — mismo diseño y animación en Nosotros y Presentación. */
export default function HowWeWork({
	eyebrow = "Cómo trabajamos",
	headingId = "como",
}: {
	eyebrow?: string;
	headingId?: string;
}) {
	return (
		<Section aria-labelledby={headingId}>
			<Container>
				<Eyebrow>{eyebrow}</Eyebrow>
				<Heading level={2} id={headingId} className="max-w-2xl">
					<Lines lines={["Un proceso claro,", "de principio a fin."]} />
				</Heading>
				<ol className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-lightgrey/10 bg-lightgrey/10 sm:grid-cols-2 lg:grid-cols-5">
					{WORK_STEPS.map((s, i) => (
						<Reveal
							key={s.n}
							delay={i * 0.07}
							as="li"
							y={0}
							x={i % 2 === 0 ? -28 : 28}
							className="group flex h-full flex-col gap-3 bg-midnight p-7 transition-colors duration-500 hover:bg-midnight-deep sm:p-8"
						>
							<span className="font-display text-sm tracking-[0.2em] text-mint">
								{s.n}
							</span>
							<h3 className="font-display text-2xl font-medium uppercase">
								{s.title}
							</h3>
							<p className="text-[15px] leading-relaxed text-lightgrey/65">
								{s.copy}
							</p>
						</Reveal>
					))}
				</ol>
			</Container>
		</Section>
	);
}
