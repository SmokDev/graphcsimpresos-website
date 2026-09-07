import type { NextConfig } from "next";
const nextConfig: NextConfig = {
	// Exportación 100% estática para hosting compartido (Apache):
	// `npm run build` genera la carpeta out/ lista para subir a public_html/.
	// Requiere imágenes sin optimizar (sin servidor Next para procesarlas).
	output: "export",
	images: {
		unoptimized: true,
	},
};
export default nextConfig;
