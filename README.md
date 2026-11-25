# ZenBot web (Next.js)

Conversión a Next.js (App Router + TypeScript) de la landing estática `Proyecto-X-main`.

## Cómo correrlo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

Requiere Node 20.9 o superior.

## Estructura

```
app/
  layout.tsx            metadatos, Open Graph, favicons y fuentes de Google
  page.tsx              la portada: junta los componentes + JSON-LD
  globals.css           el CSS original (nb.css)
  api/nb/*              rutas API de relleno (ver abajo)
app/grupos/page.tsx     página «Grupos gratis» (/grupos)
components/             una pieza por sección de la página
  LegacyScripts.tsx     carga los scripts originales en orden, ya hidratada la página
lib/jsonld.ts           datos estructurados de los planes (schema.org)
lib/grupos.ts           lista de grupos gratis de /grupos (edítala aquí)
public/images/          imágenes originales
public/js/              scripts originales (animación del teléfono, menú, formulario)
```

## Rutas API de relleno (hay que completarlas)

Los scripts originales llaman a un backend que no venía en el zip. Dejé rutas mínimas
para que la página funcione sin errores:

- `POST /api/nb/lead`: formulario «ZenBot para negocios». **Solo valida y escribe en el log del servidor**; conéctalo a correo, base de datos o webhook.
- `POST /api/nb/track`: estadísticas de visitas. No guarda nada.
- `GET /api/nb/me` y `GET /api/nb/login-url`: sesión de usuario. Sin cuentas reales.

## Pendiente

- Los enlaces internos (`/funciones`, `/comprar`, `/pedidos`, `/grupos`, `/privacidad`, `/terminos`) apuntan a páginas que no venían en el zip y dan 404 hasta que las crees.
- Quedan restos de la marca anterior «Nami»: el correo de contacto (`info@namilinofc.com`), el nombre «NamiBot» en el chat de ejemplo (`public/js/nb.js`) y los textos de `public/js/svc-switch.js`. Los dejé tal cual venían.

## Grupos gratis

`/grupos` sale de `lib/grupos.ts`. Hoy los 5 grupos están en «Lleno». Cuando abras uno, pon `disponible: true` y su `enlace` de invitación de WhatsApp: aparece el botón «Unirme gratis». El texto de la página se pasó de «NamiBot» a «ZenBot» para que coincida con la portada.
