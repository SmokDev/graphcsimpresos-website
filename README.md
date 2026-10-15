# graphicsimpresos-website

## Publicar en hosting Apache / cPanel

En Windows ejecuta `npm run package:hosting`. Compila el sitio, verifica que los
assets referenciados existan y genera `hosting.zip` con todo el contenido de `out/`,
incluidos `_next/` y `.htaccess`.

1. Sube `hosting.zip` a la raíz pública del dominio (normalmente `public_html/`).
2. Extráelo allí y permite reemplazar los archivos anteriores. `index.html` y
   `_next/` deben quedar directamente en esa raíz, no dentro de `out/`.
3. Conserva los archivos anteriores de `_next/` durante la actualización: las
   pestañas abiertas todavía pueden necesitarlos. Al subir por FTP, carga primero
   los assets de `_next/` y al final los HTML y los archivos `.txt`.
4. Purga la caché del hosting/CDN si lo utilizas y recarga el navegador.

Para otros sistemas, ejecuta `npm run build` y sube **todo** el contenido de `out/`,
incluido el archivo oculto `.htaccess`. No subas solamente `public/` ni `.next/`.
`npm run verify:export` permite volver a comprobar la exportación.

Si `/_next/static/chunks/*.js` devuelve 404 o `text/html`, revisa que ese archivo
exacto exista en la raíz pública. Un HTML de otro build puede pedir hashes que
no están en el servidor. No agregues un fallback general a `index.html` para
estas rutas: los scripts deben responder con JavaScript. La configuración asume
que el sitio está en la raíz del dominio.
