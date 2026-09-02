import Logomark from "./logomark";
import Link from "next/link";
import Heading from "./ui/heading";

export default function Footer() {
	return (
		<footer className="w-full flex flex-col dorado">
			<div className="w-full flex g-7 md:g-0 flex-col md:flex-row items-center px-25 py-15 bg-base text-foreground h-">
				<div className="w-full md:w-1/2 flex justify-center items-center">
					<Logomark className="w-full md:w-4/5" isWhite />
				</div>
				<div className="w-full md:w-1/2 flex">
					<div className="w-full flex flex-col justify-center items-center gap-2 text-lg uppercase">
						<Link href="/">Inicio</Link>
						<Link href="/nosotros">Nosotros</Link>
						<Link href="/soluciones">Soluciones</Link>
						<Link href="/contacto">Contacto</Link>
					</div>
					<div className="w-full flex flex-col justify-center items-center gap-4 text-center">
						<div className="flex flex-col justify-center items-center gap-2">
							<Heading level={4} className="text-center">
								Contacto
							</Heading>
							<p>+52 55 1989 3032</p>
							<p>contacto@impresostrece.com</p>
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
			<div className="w-full blanco bg-base text-foreground text-center p-4">
				© 2025 Impresos Trece. Todos los derechos reservados.
			</div>
		</footer>
	);
}
