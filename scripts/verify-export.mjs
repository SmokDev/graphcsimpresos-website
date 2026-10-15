import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("out");
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map((entry) => {
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  }))).flat();
}

const files = await walk(root);
const referenced = new Set(["/index.html", "/404.html", "/.htaccess"]);
// Los bundles contienen prefijos internos de Next que no son archivos exportados.
for (const file of files.filter((file) => /\.(html|css)$/.test(file))) {
  const content = await readFile(file, "utf8");
  for (const match of content.matchAll(/\/_next\/[^\s"'<>\\)]+/g)) {
    referenced.add(match[0].split(/[?#]/)[0]);
  }
  if (file.endsWith(".css")) {
    for (const match of content.matchAll(/url\(["']?(\.\.?\/[^\s"')]+)["']?\)/g)) {
      const absolute = path.resolve(path.dirname(file), match[1].split(/[?#]/)[0]);
      referenced.add(`/${path.relative(root, absolute).split(path.sep).join("/")}`);
    }
  }
}

const missing = [];
for (const url of referenced) {
  const file = path.join(root, decodeURIComponent(url));
  if (!(await stat(file).catch(() => null))?.isFile()) missing.push(url);
}
if (missing.length) {
  console.error("Exportación incompleta. Faltan archivos:", missing);
  process.exitCode = 1;
} else {
  console.log(`Exportación verificada: ${files.length} archivos; ${referenced.size} referencias comprobadas.`);
}
