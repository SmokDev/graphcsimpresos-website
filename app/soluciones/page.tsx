import type { Metadata } from "next";
import SolucionesClient from "./client";

export const metadata: Metadata = {
	title: "Soluciones — Graphics Impresos",
	description: "Soluciones que hacen tangible tu marca. Identidad, publicidad, packaging y uniformes con producción premium.",
};

export default function Page() {
	return <SolucionesClient />;
}
