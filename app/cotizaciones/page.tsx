import type { Metadata } from "next";
import CotizacionesClient from "./client";

export const metadata: Metadata = {
	title: "Cotizaciones — Graphics Impresos",
	description: "Cuéntanos qué necesitas lograr. Te ayudamos a convertirlo en una solución impresa. Solicita tu cotización.",
};

export default function Page() {
	return <CotizacionesClient />;
}
