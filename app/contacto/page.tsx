import type { Metadata } from "next";
import CotizacionesClient from "../cotizaciones/client";

export const metadata: Metadata = {
	title: "Contacto — Graphics Impresos",
	description: "Contacto redirigido a Cotizaciones. Cuéntanos qué necesitas lograr.",
};

export default function ContactoPage() {
	return <CotizacionesClient />;
}
