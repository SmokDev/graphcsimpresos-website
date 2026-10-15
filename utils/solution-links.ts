const SOLUTION_ROUTES: Record<string, string> = {
  "identidad-corporativa": "papeleria-corporativa",
  "publicidad-promocion": "publicidad-y-promocion",
  packaging: "empaques-y-etiquetas",
  uniformes: "uniformes-y-distintivos",
  promocionales: "promocionales-personalizados",
};

export function solutionHref(catalogSlug: string) {
  const slug = SOLUTION_ROUTES[catalogSlug];
  return slug ? `/soluciones/${slug}` : "/soluciones";
}
