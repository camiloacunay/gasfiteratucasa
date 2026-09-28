# Gasfiter a tu casa — sitio web

Sitio estático listo para GitHub Pages y preparado para el dominio:

**https://gasfiteratucasa.cl/**

## Datos ya configurados

- Marca: Gasfiter a tu casa
- Teléfono / WhatsApp: +56 9 8757 2679
- Cobertura principal: Talca
- Dominio: gasfiteratucasa.cl
- Formulario: no usa backend; prepara el mensaje y abre WhatsApp

## Estructura

```text
gasfiteratucasa_web/
├── index.html
├── styles.css
├── script.js
├── CNAME
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── 404.html
└── assets/
    ├── logo.webp
    ├── marca.webp
    ├── datos.webp
    ├── favicon.ico
    ├── favicon.png
    └── apple-touch-icon.png
```

## Subir a GitHub

Sube **todo el contenido de esta carpeta a la raíz del repositorio**, no la carpeta contenedora.

Después ve a:

**Settings → Pages → Build and deployment**

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/ (root)`

El archivo `CNAME` ya contiene `gasfiteratucasa.cl`.

## DNS del dominio

Para el dominio raíz `gasfiteratucasa.cl`, configura registros A de GitHub Pages:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Para `www`, usa un CNAME apuntando a tu dominio de GitHub Pages, por ejemplo:

```text
www -> camiloacunay.github.io
```

Cuando GitHub valide el dominio, activa **Enforce HTTPS**.

## Qué conviene revisar antes de publicar

1. Confirma que el teléfono +56 9 8757 2679 es el número final.
2. Confirma si deseas indicar comunas o sectores adicionales además de Talca.
3. Si cuentas con correo, horario, Google Business Profile o redes sociales, se pueden agregar después.
4. Las imágenes originales fueron optimizadas a WebP para mejorar carga y rendimiento.
