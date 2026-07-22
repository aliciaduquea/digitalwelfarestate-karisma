# Micrositio · Protección social, datos y derechos

Sitio construido con [Jekyll](https://jekyllrb.com/), pensado para publicarse gratis con **GitHub Pages**. Por ahora contiene la sección del playbook para la transición del Sisbén al RUI.

## Cómo publicarlo (sin instalar nada)

GitHub construye el sitio automáticamente. Solo hay que hacer esto una vez:

1. Suban todos los archivos de esta carpeta a la raíz del repositorio (arrastrándolos en la web de GitHub o con `git push`).
2. Abran `_config.yml` y ajusten `baseurl`. Si el sitio va a vivir en `https://USUARIO.github.io/NOMBRE-DEL-REPO/`, el valor debe ser `baseurl: "/NOMBRE-DEL-REPO"`. Si van a usar un dominio propio (por ejemplo un subdominio de karisma.org.co), déjenlo en `""`.
3. En el repositorio, vayan a **Settings → Pages**. En "Build and deployment", elijan **Deploy from a branch**, seleccionen la rama `main` y la carpeta `/ (root)`. Guarden.
4. Esperen uno o dos minutos. La URL del sitio aparece en esa misma pantalla.

Cada vez que ustedes o su jefe editen un archivo y lo suban a `main`, GitHub reconstruye el sitio solo.

## Cómo verlo en el computador (opcional)

Solo si quieren previsualizar cambios antes de subirlos. Requiere Ruby instalado.

```bash
gem install bundler
bundle install
bundle exec jekyll serve
```

El sitio queda en `http://localhost:4000`.

## Dónde está cada cosa

| Qué quieren cambiar | Dónde |
|---|---|
| Nombre y descripción del sitio | `_config.yml` (`title` y `description`) |
| Colores y tipografías | Variables al inicio de `assets/css/main.css` (documentadas para la diseñadora) |
| Un play (texto, resumen, reforma) | El archivo correspondiente en `_plays/` |
| Las cinco etapas del sistema | `_data/etapas.yml` |
| Las 16 herramientas de la caja | `_data/recursos.yml` (ahí se define también qué plays usan cada recurso) |
| Las 18 reformas | `_data/reformas.yml` |
| Portada del sitio | `index.html` |
| Página principal del playbook | `playbook/index.html` |
| Contexto (Del Sisbén al RUI) | `playbook/contexto.md` |

## Cómo agregar o editar un play

Cada play es un archivo Markdown en `_plays/` con un encabezado como este:

```yaml
---
title: "Título del play"
numero: 7
etapa: 4        # 1 a 5, según la etapa del sistema
reforma: 1      # número de la reforma de origen
alcance: plena  # plena | parcial
resumen: "Una frase que aparece en la tarjeta del play."
---
```

Debajo del encabezado va el contenido con secciones `## Qué propone`, `## El problema que resuelve`, `## Quiénes participan`, `## Qué se gana`, `## Cómo implementarlo` y una cita final con el aprendizaje clave. Las páginas, las tarjetas, los filtros y los enlaces cruzados se generan solos a partir de estos datos.

## Pendientes conocidos

- Definir el nombre final del micrositio y actualizar `title` en `_config.yml`.
- Subir los archivos descargables de las 16 herramientas (por ahora la caja muestra un aviso de "próximamente"). Pueden guardarse en una carpeta `assets/descargas/` y enlazarse desde `_data/recursos.yml`.
- Dos inconsistencias del documento fuente que conviene resolver con las autoras: el Play 2 aparece como "incorporación plena" en el capítulo 3 pero la Tabla 4 clasifica la Reforma 18 como parcial (el sitio sigue al capítulo 3); y el capítulo 4 tiene dos recursos numerados 12, que aquí quedaron como 12a y 12b.
- Secciones futuras del micrositio (investigación sobre el Sisbén, trabajo regional) aparecen en la portada como "próximamente".
