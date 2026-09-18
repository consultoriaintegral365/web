# Activos de marca de CI365

## Logo para Microsoft Entra ID

`ci365-logo-1024.png` es el archivo que se sube en **Entra ID → Registros de
aplicaciones → [la app] → Branding & properties → Logo**.

| Requisito del portal | Archivo |
| --- | --- |
| PNG o JPG | PNG |
| Máximo 1024×1024 px | 1024×1024 |
| Máximo 1 MB | ~20 KB |
| Preferentemente cuadrado | Cuadrado |

Se incluye `ci365-logo-512.png` por si algún portal pide un tamaño menor.

El fondo azul de la marca es parte del logo, de modo que se lee sobre la
pantalla de consentimiento —que es blanca— sin necesidad de borde. Las esquinas
redondeadas son transparentes, así que la forma se recorta limpia sobre
cualquier fondo. Verificado legible a 48, 64 y 96 px.

## Fuente

`ci365-mark.svg` es el original vectorial. Para regenerar los PNG:

```bash
node -e "
const sharp = require('sharp'), fs = require('fs');
const svg = fs.readFileSync('brand/ci365-mark.svg');
[1024, 512].forEach(s =>
  sharp(svg, { density: 600 }).resize(s, s).png({ compressionLevel: 9 })
    .toFile('brand/ci365-logo-' + s + '.png'));
"
```

El mismo trazo se usa en `public/favicon.svg` y en el componente `Logo.astro`.
Si cambia la marca, hay que actualizar los tres.
