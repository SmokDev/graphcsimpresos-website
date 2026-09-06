"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, CheckCircle2, ChevronDown, Loader2 } from "lucide-react";
import Input from "@/components/ui/input";
import { QUOTE_TYPES } from "@/utils/site";
import { cn } from "@/utils/cn";

type Status = "idle" | "sending" | "success" | "error";
type Fields = {
	nombre: string;
	empresa: string;
	email: string;
	telefono: string;
	tipo: string;
	proyecto: string;
	cantidad: string;
	medidas: string;
	material: string;
	acabado: string;
	prueba: string;
};

const EMPTY: Fields = {
	nombre: "",
	empresa: "",
	email: "",
	telefono: "",
	tipo: "",
	proyecto: "",
	cantidad: "",
	medidas: "",
	material: "",
	acabado: "",
	prueba: "",
};

export default function QuoteForm() {
	const [values, setValues] = useState<Fields>(EMPTY);
	const [errors, setErrors] = useState<Partial<Fields>>({});
	const [status, setStatus] = useState<Status>("idle");

	const set = (k: keyof Fields) => (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) => {
		setValues((v) => ({ ...v, [k]: e.target.value }));
		setErrors((prev) => ({ ...prev, [k]: undefined }));
	};

	function validate(v: Fields) {
		const e: Partial<Fields> = {};
		if (v.nombre.trim().length < 2) e.nombre = "Cuéntanos tu nombre (mínimo 2 caracteres).";
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
			e.email = "Revisa tu correo electrónico.";
		if (v.telefono.trim().length < 7)
			e.telefono = "Agrega un teléfono o WhatsApp válido.";
		if (!v.tipo) e.tipo = "Elige el tipo de proyecto.";
		if (v.proyecto.trim().length < 10)
			e.proyecto = "Descríbenos tu proyecto con un poco más de detalle (mínimo 10 caracteres).";
		return e;
	}

	async function onSubmit(e: React.FormEvent) {
		e.preventDefault();
		const e2 = validate(values);
		setErrors(e2);
		if (Object.keys(e2).length > 0) {
			document
				.getElementById("quote-form-error")
				?.scrollIntoView({ behavior: "smooth", block: "center" });
			return;
		}
		setStatus("sending");
		try {
			// Canal actual: compone un correo con los datos (sin backend).
			// Si existe integración (API/CRM), conectar aquí sin cambiar la UI.
			const subject = encodeURIComponent(
				`Cotización — ${values.tipo} — ${values.nombre}`
			);
			const body = encodeURIComponent(
				[
					`Nombre: ${values.nombre}`,
					`Empresa / negocio: ${values.empresa || "—"}`,
					`Correo: ${values.email}`,
					`Teléfono / WhatsApp: ${values.telefono}`,
					`Tipo: ${values.tipo}`,
					``,
					`Proyecto:`,
					values.proyecto,
					``,
					`Cantidad aproximada: ${values.cantidad || "—"}`,
					`Medidas / formato: ${values.medidas || "—"}`,
					`Material: ${values.material || "—"}`,
					`Acabado: ${values.acabado || "—"}`,
					`Prueba de impresión: ${values.prueba === "si" ? "Sí" : values.prueba === "no" ? "No" : "—"}`,
				].join("\n")
			);
			await new Promise((r) => setTimeout(r, 900));
			window.location.href = `mailto:contacto@graphicsimpresos.com?subject=${subject}&body=${body}`;
			setStatus("success");
		} catch {
			setStatus("error");
		}
	}

	return (
		<div className="relative">
			<AnimatePresence mode="wait">
				{status === "success" ? (
					<motion.div
						key="ok"
						initial={{ opacity: 0, y: 24 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
					className="flex flex-col items-start gap-5 rounded-3xl border border-midnight/25 bg-midnight/[0.06] p-8 sm:p-12"
					role="status"
				>
					<CheckCircle2 className="h-10 w-10 text-midnight" aria-hidden />
					<h2 className="font-display text-3xl font-medium uppercase sm:text-4xl">
						Solicitud lista. Hablemos.
					</h2>
					<p className="max-w-lg leading-relaxed text-midnight/75">
						Se abrió tu correo con la cotización preparada. Si prefieres,
						escríbenos directamente al{" "}
						<a className="underline underline-offset-4 hover:no-underline" href="tel:+525587730703">
							55 8773 0703
						</a>{" "}
						y le damos seguimiento a tu proyecto.
					</p>
					<button
						onClick={() => {
							setValues(EMPTY);
							setStatus("idle");
						}}
						className="mt-2 rounded-full border border-midnight/30 px-7 py-3 text-[13px] uppercase tracking-[0.18em] transition-colors hover:bg-midnight hover:text-lightgrey"
					>
						Solicitar otra cotización
					</button>
					</motion.div>
				) : (
					<motion.form
						key="form"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onSubmit={onSubmit}
						noValidate
						className="flex flex-col gap-10"
					>
						{/* 01 Contacto */}
						<fieldset className="flex flex-col gap-2">
							<legend className="mb-2 flex items-center gap-4">
								<span className="font-display text-sm text-midnight">01</span>
								<span className="text-[11px] uppercase tracking-[0.28em] text-midnight/60">
									Información de contacto
								</span>
								<span aria-hidden className="h-px w-16 bg-midnight/20" />
							</legend>
							<div className="grid gap-x-8 sm:grid-cols-2">
								<Input label="Nombre" name="nombre" value={values.nombre} onChange={set("nombre")} required autoComplete="name" error={errors.nombre} placeholder=" " />
								<Input label="Empresa / negocio" name="empresa" value={values.empresa} onChange={set("empresa")} autoComplete="organization" placeholder=" " />
								<Input label="Correo electrónico" name="email" type="email" value={values.email} onChange={set("email")} required autoComplete="email" error={errors.email} placeholder=" " />
								<Input label="Teléfono / WhatsApp" name="telefono" type="tel" value={values.telefono} onChange={set("telefono")} required autoComplete="tel" error={errors.telefono} placeholder=" " />
							</div>
						</fieldset>

						{/* 02 Proyecto */}
						<fieldset className="flex flex-col gap-2">
							<legend className="mb-2 flex items-center gap-4">
								<span className="font-display text-sm text-midnight">02</span>
								<span className="text-[11px] uppercase tracking-[0.28em] text-midnight/60">
									Tu proyecto
								</span>
								<span aria-hidden className="h-px w-16 bg-midnight/20" />
							</legend>
							<div className="relative mt-2 w-full">
								<label
									htmlFor="tipo"
									className="pointer-events-none absolute left-1 top-1 text-xs uppercase tracking-[0.18em] text-midnight/60"
								>
									¿Qué necesitas? <span aria-hidden className="text-midnight">*</span>
								</label>
								<select
									id="tipo"
									value={values.tipo}
									onChange={set("tipo")}
									required
									aria-invalid={!!errors.tipo}
									aria-describedby={errors.tipo ? "tipo-error" : undefined}
									className={cn(
										"w-full appearance-none border-b bg-transparent px-1 pb-3 pt-7 text-[15px] text-midnight outline-none transition-colors duration-200",
										errors.tipo
											? "border-red-700"
											: "border-midnight/25 hover:border-midnight/50 focus:border-midnight",
										!values.tipo && "text-midnight/50"
									)}
								>
									<option value="" disabled>
										Selecciona una opción
									</option>
									{QUOTE_TYPES.map((t) => (
										<option key={t} value={t} className="bg-midnight-deep text-lightgrey">
											{t}
										</option>
									))}
								</select>
								<ChevronDown
									className="pointer-events-none absolute bottom-4 right-1 h-4 w-4 text-midnight/60"
									aria-hidden
								/>
								{errors.tipo && (
									<p id="tipo-error" role="alert" className="mt-2 text-sm text-red-800">
										{errors.tipo}
									</p>
								)}
							</div>
							<Input label="Cuéntanos sobre tu proyecto" name="proyecto" isTextarea value={values.proyecto} onChange={set("proyecto")} required error={errors.proyecto} hint="Objetivo, piezas que imaginas, fechas clave… mientras más contexto, mejor propuesta." placeholder=" " />
						</fieldset>

						{/* 03 Especificaciones */}
						<fieldset className="flex flex-col gap-2">
							<legend className="mb-2 flex items-center gap-4">
								<span className="font-display text-sm text-midnight">03</span>
								<span className="text-[11px] uppercase tracking-[0.28em] text-midnight/60">
									Especificaciones <span className="normal-case tracking-normal">(opcional)</span>
								</span>
								<span aria-hidden className="h-px w-16 bg-midnight/20" />
							</legend>
							<div className="grid gap-x-8 sm:grid-cols-2">
								<Input label="Cantidad aproximada" name="cantidad" value={values.cantidad} onChange={set("cantidad")} placeholder=" " />
								<Input label="Medidas / formato" name="medidas" value={values.medidas} onChange={set("medidas")} placeholder=" " />
								<Input label="Material" name="material" value={values.material} onChange={set("material")} placeholder=" " />
								<Input label="Acabado" name="acabado" value={values.acabado} onChange={set("acabado")} placeholder=" " />
							</div>
							<div className="mt-4">
								<p id="prueba-label" className="text-xs uppercase tracking-[0.18em] text-midnight/60">
									¿Es necesaria una prueba de impresión?
								</p>
								<div role="radiogroup" aria-labelledby="prueba-label" className="mt-3 flex flex-wrap gap-3">
									{[
										{ value: "si", label: "Sí" },
										{ value: "no", label: "No" },
									].map((opt) => {
										const selected = values.prueba === opt.value;
										return (
											<label
												key={opt.value}
												className={cn(
													"cursor-pointer rounded-full border px-6 py-2.5 text-sm uppercase tracking-[0.14em] transition-colors duration-200",
													selected
														? "border-midnight bg-midnight text-lightgrey"
														: "border-midnight/25 text-midnight/70 hover:border-midnight/60 hover:text-midnight"
												)}
											>
												<input
													type="radio"
													name="prueba"
													value={opt.value}
													checked={selected}
													onChange={set("prueba")}
													className="sr-only"
												/>
												{opt.label}
											</label>
										);
									})}
								</div>
								<p className="mt-2 text-sm text-midnight/60">
									Recomendada para validar colores, materiales y acabados
									antes de la producción final.
								</p>
							</div>
							<p className="mt-2 text-sm text-midnight/60">
								¿Tienes un diseño o referencia? Puedes adjuntarlo al enviar el
								correo — lo revisamos contigo.
							</p>
						</fieldset>

						<div id="quote-form-error" aria-live="polite">
							{status === "error" && (
								<p role="alert" className="mb-4 text-sm text-red-800">
									Algo salió mal al preparar tu solicitud. Intenta de nuevo o
									escríbenos a contacto@graphicsimpresos.com
								</p>
							)}
							<button
								type="submit"
								disabled={status === "sending"}
								className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-midnight px-8 py-4.5 text-sm uppercase tracking-[0.2em] text-lightgrey transition-colors duration-300 hover:bg-midnight-deep disabled:opacity-60 sm:w-auto sm:px-12"
							>
								{status === "sending" ? (
									<>
										<Loader2 className="h-4 w-4 animate-spin" aria-hidden />
										Preparando solicitud…
									</>
								) : (
									<>
										Solicitar cotización
										<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
									</>
								)}
							</button>
						</div>
					</motion.form>
				)}
			</AnimatePresence>
		</div>
	);
}
