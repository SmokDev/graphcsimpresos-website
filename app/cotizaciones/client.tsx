"use client";

import { useState } from "react";
import { HeroSection } from "@/components/ui/sections";
import { Eyebrow } from "@/components/ui/section-title";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";

const soluciones = ["Identidad corporativa", "Publicidad y promoción", "Packaging", "Uniformes", "Otro"];

export default function CotizacionesClient() {
	const [solucion, setSolucion] = useState("");
	const [sending, setSending] = useState(false);
	const [sent, setSent] = useState(false);

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setSending(true);
		setTimeout(() => {
			setSending(false);
			setSent(true);
		}, 900);
	};

	return (
		<main className="bg-lightgrey">
			<HeroSection eyebrow="Cotizaciones — Graphics Impresos" kicker="Respuesta < 24h" meta="Tangible">
				Cuéntanos
				<br />
				qué <span className="text-mint">necesitas.</span>
				<span className="block mt-4 text-sm normal-case tracking-normal font-light text-lightgrey/60 max-w-xl">
					Nosotros te ayudamos a convertirlo en una solución. Cada proyecto requiere materiales, formatos y acabados distintos.
				</span>
			</HeroSection>

			<section className="mx-auto max-w-[1280px] px-6 md:px-10 py-10 md:py-16 grid lg:grid-cols-12 gap-10">
				{/* left info */}
				<div className="lg:col-span-4 space-y-8">
					<div>
						<Eyebrow>Proceso claro</Eyebrow>
						<p className="mt-3 text-sm leading-relaxed text-midnight/60">Cuéntanos qué necesitas lograr y encontraremos la mejor forma de hacerlo realidad.</p>
					</div>
					<div className="rounded-2xl bg-midnight text-lightgrey p-6 space-y-4">
						<p className="text-[11px] tracking-[0.16em] uppercase text-mint">Alternativas</p>
						<a href="tel:+525587730703" className="block text-lg hover:text-mint transition-colors">
							55 8773 0703
						</a>
						<a href="mailto:contacto@graphicsimpresos.com" className="block text-sm text-lightgrey/70 hover:text-mint">
							contacto@graphicsimpresos.com
						</a>
						<p className="text-xs text-lightgrey/40 leading-relaxed">Mar Mediterráneo 30, Tacuba, Miguel Hidalgo, CDMX</p>
						<div className="pt-4 border-t border-lightgrey/10 text-xs text-lightgrey/40">Horario: Lun–Vie 9:00–18:00</div>
					</div>
					<div className="rounded-2xl border border-midnight/10 p-6 bg-lightgrey">
						<p className="text-xs tracking-[0.14em] uppercase text-midnight/40">Qué sucede después</p>
						<ol className="mt-4 space-y-3 text-sm text-midnight/70 list-decimal list-inside">
							<li>Revisamos tu necesidad</li>
							<li>Proponemos materiales y acabados</li>
							<li>Enviamos cotización clara</li>
						</ol>
					</div>
				</div>

				{/* form */}
				<div className="lg:col-span-8">
					<div className="rounded-[28px] bg-midnight text-lightgrey p-6 md:p-10 border border-lightgrey/10 shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
						{sent ? (
							<div className="py-16 text-center space-y-4">
								<p className="size-12 mx-auto grid place-items-center rounded-full bg-mint text-midnight">✓</p>
								<h3 className="text-2xl font-light">¡Gracias!</h3>
								<p className="text-sm text-lightgrey/60 max-w-md mx-auto">Recibimos tu solicitud. Te contactamos en menos de 24h con una propuesta.</p>
								<Button onClick={() => setSent(false)} className="mt-4">Enviar otro proyecto</Button>
							</div>
						) : (
							<form onSubmit={onSubmit} className="space-y-8">
								<div>
									<p className="text-[11px] tracking-[0.2em] uppercase text-mint">01 — Datos de contacto</p>
									<div className="mt-6 grid md:grid-cols-2 gap-6">
										<Input label="Nombre" name="nombre" required autoComplete="name" />
										<Input label="Empresa" name="empresa" required />
										<Input label="Correo electrónico" name="email" type="email" required autoComplete="email" />
										<Input label="Teléfono" name="telefono" type="tel" required autoComplete="tel" />
									</div>
								</div>

								<div className="h-px bg-lightgrey/10" />

								<div>
									<p className="text-[11px] tracking-[0.2em] uppercase text-mint">02 — Proyecto</p>
									<div className="mt-4">
										<p className="text-xs tracking-[0.12em] uppercase text-lightgrey/40 mb-3">Tipo de solución o producto</p>
										<div className="flex flex-wrap gap-2">
											{soluciones.map((s) => (
												<button
													key={s}
													type="button"
													onClick={() => setSolucion(s)}
													className={`rounded-full px-4 py-2 text-xs border transition-colors ${solucion === s ? "bg-mint text-midnight border-mint" : "bg-transparent text-lightgrey/70 border-lightgrey/15 hover:border-mint/40 hover:text-mint"}`}
												>
													{s}
												</button>
											))}
										</div>
										<input type="hidden" name="solucion" value={solucion} />
									</div>
									<div className="mt-6 grid md:grid-cols-2 gap-6">
										<Input label="Cantidad aproximada" name="cantidad" placeholder="Ej. 500 pzas" />
										<Input label="Fecha en que lo necesita" name="fecha" type="date" />
									</div>
									<div className="mt-6">
										<Input label="Descripción del proyecto" name="descripcion" isTextarea required placeholder="Cuéntanos qué necesitas lograr, medidas, acabados deseados..." rows={4} />
									</div>
									<div className="mt-6">
										<label className="text-[11px] tracking-[0.16em] uppercase text-lightgrey/40">Adjuntar información (opcional)</label>
										<input
											type="file"
											name="archivo"
											className="mt-2 block w-full text-sm text-lightgrey/60 file:mr-4 file:rounded-full file:border-0 file:bg-lightgrey file:px-4 file:py-2 file:text-xs file:font-semibold file:text-midnight hover:file:bg-mint file:transition-colors"
										/>
										<p className="mt-2 text-xs text-lightgrey/30">PDF, JPG o AI — Máx. 10MB</p>
									</div>
								</div>

								<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-lightgrey/10">
									<p className="text-xs text-lightgrey/40">Al enviar aceptas ser contactado para la cotización.</p>
									<Button type="submit" disabled={sending} className="min-w-[220px]">
										{sending ? "Enviando..." : "Solicitar cotización →"}
									</Button>
								</div>
							</form>
						)}
					</div>
					<p className="mt-6 text-center text-xs text-midnight/40">También puedes escribir directo a contacto@graphicsimpresos.com</p>
				</div>
			</section>

			<section className="border-t border-midnight/5 bg-lightgrey">
				<div className="mx-auto max-w-[1280px] px-6 md:px-10 py-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-midnight/40">
					<span>Producción en CDMX · Entregas nacionales</span>
					<span className="text-midnight/60">Privacidad: tus datos solo se usan para cotizar.</span>
				</div>
			</section>

			<iframe
				title="Ubicación Graphics Impresos"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.893728248197!2d-99.18929452394445!3d19.46014818182521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f89e821738b1%3A0xeb88e8f30cdad20!2sImpresos%20Trece!5e0!3m2!1ses!2smx!4v1759425296005!5m2!1ses!2smx"
				loading="lazy"
				className="w-full h-[380px] md:h-[440px] border-0 grayscale"
			/>
		</main>
	);
}
