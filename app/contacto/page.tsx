import { HeroSection } from "@/components/ui/sections";
import Heading from "@/components/ui/heading";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Graphics Impresos - Contacto",
	description: "Contáctanos para más información",
};

export default function ContactoPage() {
	return (
		<main className="w-full">
			<HeroSection>Contactanos</HeroSection>
			<div
				className={`w-full h-auto lg:h-180 relative flex flex-col lg:flex-row odd:md:flex-row-reverse overflow-hidden`}
			>
				<div className="bg-base text-foreground mint w-full md:w-1/2 lg:w-200 h-auto flex items-center justify-center z-10 flex-col px-15 py-15 md:px-25 sm:py-20 text-center gap-4 relative">
					<div className="flex flex-col justify-center items-center gap-2 ">
						<Heading level={4} className="text-center">
							Contacto
						</Heading>
						<p>+52 55 1989 3032</p>
						<p>contacto@graphicsimpresos.com</p>
					</div>
					<div className="flex flex-col justify-center items-center gap-2">
						<Heading level={4} className="text-center">
							Dirección
						</Heading>
						<p>
							Mar Mediterráneo 30, Tacuba, Miguel Hidalgo,
							<br />
							11410 Ciudad de México, CDMX
						</p>
					</div>
				</div>
				<div className=" h-auto w-full lg:flex-grow midnight bg-base">
					<form className="flex flex-col gap-4 p-15 w-full">
						<div className="flex gap-4 w-full">
							<Input label="Nombre" name="nombre" type="text" required />
							<Input label="Nombre" name="nombre" type="phone" required />
						</div>
						<Input
							label="Correo electrónico"
							name="email"
							type="email"
							required
						/>
						<Input label="Mensaje" name="mensaje" required isTextarea />
						<Button className="mt-4 self-center">Enviar</Button>
					</form>
				</div>
			</div>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.893728248197!2d-99.18929452394445!3d19.46014818182521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f89e821738b1%3A0xeb88e8f30cdad20!2sImpresos%20Trece!5e0!3m2!1ses!2smx!4v1759425296005!5m2!1ses!2smx"
				loading="lazy"
				className="w-full h-120  lg:h-150 border-0"
			></iframe>
		</main>
	);
}
