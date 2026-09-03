import Link from "next/link";
import Button from "./ui/button";
import Heading from "./ui/heading";

export default function AlgunProyecto() {
	return (
		<div className="text-center w-full flex flex-col justify-center items-center gap-4 py-50 px-15 midnight bg-base text-foreground bg-[url('/printer.webp')] bg-cover bg-center bg-fixed">
			<Heading level={2} className="max-w-2xl">
				¿Listo para imprimir tu próximo proyecto?
			</Heading>
			<p className="text-center max-w-lg">
				Contáctanos y recibe una cotización personalizada sin compromiso.
				Estamos listos para ayudarte a llevar tu idea al papel.
			</p>
			<Link href="/contacto">
				<Button>Contáctanos</Button>
			</Link>
		</div>
	);
}
