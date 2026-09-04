import type { Metadata } from "next";
import { HeroSection, Container, Eyebrow } from "@/components/ui/sections";
import Heading from "@/components/ui/heading";
import QuoteForm from "@/components/quote-form";
import { Lines, Reveal } from "@/components/motion/reveal";
import { SITE } from "@/utils/site";
import { Clock, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
	title: "Solicitar cotización de impresión",
	description:
		"Solicita tu cotización de impresión: identidad corporativa, publicidad, packaging y uniformes. Cuéntanos tu proyecto y te ayudamos a encontrar la mejor solución gráfica.",
	alternates: { canonical: "/cotizaciones" },
};

export default function CotizacionesPage() {
	return (
		<main className="w-full bg-midnight">
			<HeroSection
				useAltBackground
				kicker="Cotizaciones"
				sub="Describe tu proyecto y te ayudaremos a encontrar la mejor solución gráfica."
				meta={["Respuesta personalizada", "Sin compromiso"]}
			>
				{["Cuéntanos", "qué necesitas", "imprimir."]}
			</HeroSection>

			<section aria-labelledby="form-title" className="relative">
				<Container className="grid gap-12 py-16 sm:py-24 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
					{/* Aside */}
					<aside className="lg:sticky lg:top-28 lg:self-start">
						<Eyebrow>Solicitud</Eyebrow>
						<Heading level={2} id="form-title">
							<Lines lines={["Solicita", "tu cotización."]} />
						</Heading>
						<Reveal delay={0.12}>
							<p className="mt-5 max-w-md leading-relaxed text-lightgrey/75">
								Completa lo que puedas — no necesitas tener todo definido.
								Con tu idea es suficiente para empezar la conversación.
							</p>
						</Reveal>
						<Reveal delay={0.18}>
							<ul className="mt-8 flex flex-col gap-4">
								<li>
									<a
										href={SITE.phoneHref}
										className="group flex items-center gap-4 rounded-2xl border border-lightgrey/10 p-4 transition-colors hover:border-mint/50"
									>
										<span className="flex h-11 w-11 items-center justify-center rounded-full bg-mint/12 text-mint">
											<Phone className="h-5 w-5" aria-hidden />
										</span>
										<span>
											<span className="block text-[11px] uppercase tracking-[0.24em] text-lightgrey/55">
												Teléfono / WhatsApp
											</span>
											<span className="font-display text-xl">{SITE.phone}</span>
										</span>
									</a>
								</li>
								<li>
									<a
										href={`mailto:${SITE.email}`}
										className="group flex items-center gap-4 rounded-2xl border border-lightgrey/10 p-4 transition-colors hover:border-mint/50"
									>
										<span className="flex h-11 w-11 items-center justify-center rounded-full bg-mint/12 text-mint">
											<Mail className="h-5 w-5" aria-hidden />
										</span>
										<span className="min-w-0">
											<span className="block text-[11px] uppercase tracking-[0.24em] text-lightgrey/55">
												Correo
											</span>
											<span className="block truncate font-display text-lg">
												{SITE.email}
											</span>
										</span>
									</a>
								</li>
								<li className="flex items-center gap-4 rounded-2xl border border-lightgrey/10 p-4">
									<span className="flex h-11 w-11 items-center justify-center rounded-full bg-mint/12 text-mint">
										<Clock className="h-5 w-5" aria-hidden />
									</span>
									<span>
										<span className="block text-[11px] uppercase tracking-[0.24em] text-lightgrey/55">
											Ubicación
										</span>
										<span className="text-sm leading-relaxed text-lightgrey/80">
											Tacuba, Miguel Hidalgo — CDMX
										</span>
									</span>
								</li>
							</ul>
						</Reveal>
					</aside>

					{/* Form */}
					<Reveal delay={0.1}>
						<div className="rounded-3xl bg-mint p-6 text-midnight sm:p-10">
							<QuoteForm />
						</div>
					</Reveal>
				</Container>
			</section>
		</main>
	);
}
