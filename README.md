# Infinitia — Landing Page

Sitio web de Infinitia. Stack HTML + Vanilla CSS + React 18 via CDN (sin build step).

## Estructura

```
infinitia-website/
├── index.html                   # Entrada principal (landing)
├── Infinitia Landing.html       # Copia de desarrollo (mismo contenido)
├── Infinitia Landing-print.html # Versión para exportar a PDF
├── src/
│   ├── content.js               # Contenido i18n (ES / EN)
│   ├── icons.js                 # SVG icons + helpers (useReveal, InfinitiaLogo)
│   ├── sections-a.jsx           # Nav, Hero, Services, Process, Stats
│   └── sections-b.jsx           # Team, Clients, FAQ, Contact, Footer
└── styles/
    ├── tokens.css               # Design tokens (colores, tipografía, espaciado)
    └── site.css                 # Estilos del landing
```

## Desarrollo local

No requiere build. Basta con servir la carpeta raíz:

```bash
# Opción 1 — Python (viene instalado)
python3 -m http.server 8080
# Luego abrí: http://localhost:8080

# Opción 2 — Node (si tenés npx)
npx serve .

# Opción 3 — VS Code Live Server
# Abrí index.html → botón "Go Live"
```

> **Nota:** No abras `index.html` directo con `file://` porque los módulos `.jsx` cargados con Babel Standalone necesitan un servidor HTTP para que los fetch funcionen correctamente en todos los navegadores.

## Despliegue

### Netlify (recomendado)

1. Conectá el repo a Netlify.  
2. Sin build command, publish directory: `.` (la raíz).  
3. Netlify detectará el `_redirects` y servirá `index.html` en `/`.

### GitHub Pages

1. En Settings → Pages → Source: `main` / `/ (root)`.  
2. El archivo `404.html` redirige a `index.html` para las rutas que no existen.

### Vercel

1. `vercel --prod` desde la raíz.  
2. No requiere configuración adicional.

### Cualquier hosting estático

Subí todos los archivos a la raíz del servidor. El punto de entrada es `index.html`.

## Generar PDF

Abrí `Infinitia Landing-print.html` en el navegador. El diálogo de impresión se abre automáticamente. Usá "Guardar como PDF" con tamaño de página 1440 × 1000 px.

## Internacionalización

El contenido está en `src/content.js` bajo `window.CONTENT.es` y `window.CONTENT.en`. El toggle de idioma en la navbar guarda la preferencia en `localStorage`.
