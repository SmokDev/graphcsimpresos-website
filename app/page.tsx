import type { Metadata } from "next";
import HomeClient from "./home-client";

export const metadata: Metadata = {
	title: "Graphics Impresos — Más de 25 años convirtiendo ideas en soluciones impresas",
	description: "Diseñamos tu idea, imprimimos tu éxito. Transformamos necesidades en objetos reales con asesoría, diseño y producción.",
};

export default function Page() {
	return <HomeClient />;
}
