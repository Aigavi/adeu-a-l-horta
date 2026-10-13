# Adéu a l'horta — proyecto editorial

Este repositorio contiene la base editorial para convertir un reportaje fotográfico y, más adelante, la voz de su autor en una experiencia web documental.

La fase actual incluye una primera versión funcional de la pieza web. La página convierte el orden fotográfico del libreto en un recorrido vertical y utiliza una edición narrativa de la conversación con el autor.

## Ver la web

Desde la carpeta del proyecto, inicia un servidor local y abre `http://localhost:4173`:

```sh
python3 -m http.server 4173
```

La implementación es HTML, CSS y JavaScript nativos. No necesita instalar dependencias ni ejecutar un proceso de compilación.

## Estado actual

- 167 fotografías inventariadas.
- Audio localizado, pero apartado temporalmente por decisión del usuario.
- Primera lectura temática y narrativa completada.
- Primera edición fotográfica propuesta; no es una selección definitiva.
- Primera dirección web construida a partir de las referencias acordadas y del orden del libreto.
- Título, protagonistas, lugar, fechas, cultivo/variedad, idioma y contexto histórico pendientes de confirmación.

## Documentos

1. [`PRODUCT.md`](PRODUCT.md) — propósito, principios, restricciones y hechos disponibles.
2. [`docs/01-lectura-del-material.md`](docs/01-lectura-del-material.md) — lectura visual del archivo.
3. [`docs/02-hipotesis-editorial.md`](docs/02-hipotesis-editorial.md) — tesis posibles, tono y territorio narrativo.
4. [`docs/03-estructura-narrativa.md`](docs/03-estructura-narrativa.md) — propuesta de recorrido por capítulos.
5. [`docs/04-direcciones-de-forma.md`](docs/04-direcciones-de-forma.md) — mundos visuales e ideas de interacción.
6. [`docs/05-primera-edicion-fotografica.md`](docs/05-primera-edicion-fotografica.md) — primer corte de imágenes y funciones narrativas.
7. [`docs/06-preguntas-y-decisiones.md`](docs/06-preguntas-y-decisiones.md) — datos que necesitamos confirmar antes de publicar.
8. [`docs/07-modelo-de-contenido.md`](docs/07-modelo-de-contenido.md) — estructura de datos prevista para construir la web.

## Material y datos

- `fotos/` — originales JPEG. No se han modificado.
- `transcripccio_enric.m4a` — audio original; reservado para una fase posterior.
- `data/photo-inventory.json` — inventario técnico generado a partir de los originales.
- `tools/` — utilidades locales para inventario y hojas de contacto.
- `index.html`, `styles.css`, `script.js` — primera versión de la pieza web.
- `assets/webp/` — copias optimizadas de las fotografías seleccionadas en el libreto.

## Principio de trabajo

El archivo fotográfico es la fuente principal. Ningún texto, título, pie de foto o recurso visual debe inventar hechos que el material o sus autores no hayan confirmado.
