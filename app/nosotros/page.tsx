import type { Metadata } from "next";
import NosotrosClient from "./client";

export const metadata: Metadata = {
	title: "Quiénes Somos — Graphics Impresos",
	description: "Más de 25 años transformando ideas en soluciones impresas. Asesoría, diseño y producción personalizada.",
};

export default function Page() {
	return <NosotrosClient />;
}
