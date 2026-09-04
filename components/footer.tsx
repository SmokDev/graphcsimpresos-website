import Image from "next/image";
import Link from "next/link";
import Heading from "./ui/heading";

export default function Footer() {
	return (
		<footer className="w-full flex flex-col midnight">
			<div className="w-full flex gap-7 md:gap-0 flex-col md:flex-row items-center px-8 md:px-12 py-12 bg-base text-foreground">
				<div className="w-full md:w-1/2 flex justify-center items-center">
					<Image
						src="/Logo%20Lightgray.svg"
						alt="Graphics Impresos"
						width={320}
						height={80}
						className="w-full max-w-[320px] h-auto object-contain"
					/>
				</div>
				<div className="w-full md:w-1/2 flex">
					<div className="w-full flex flex-col justify-center items-center gap-2 text-lg uppercase">
						<Link href="/" className="hover:text-lightgrey transition-colors">Inicio</Link>
						<Link href="/nosotros" className="hover:text-lightgrey transition-colors">Nosotros</Link>
						<Link href="/soluciones" className="hover:text-lightgrey transition-colors">Soluciones</Link>
						<Link href="/contacto" className="hover:text-lightgrey transition-colors">Contacto</Link>
					</div>
					<div className="w-full flex flex-col justify-center items-center gap-4 text-center">
						<div className="flex flex-col justify-center items-center gap-2">
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
				</div>
			</div>
			<div className="w-full lightgrey bg-base text-foreground text-center p-4 text-sm">
				© 2025 Graphics Impresos. Todos los derechos reservados.
			</div>
		</footer>
	);
}
