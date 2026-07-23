# Micrositio Karisma · Protección social, datos y derechos

Sitio construido con [Jekyll](https://jekyllrb.com/) y publicado con **GitHub Pages**. El diseño es propio, no usa ningún tema de terceros.

## Cómo publicarlo (sin instalar nada)

1. Suban todos los archivos de esta carpeta a la raíz del repositorio.
2. En `_config.yml`, ajusten `baseurl` al nombre del repositorio, por ejemplo `baseurl: "/nombre-del-repo"`. Si usan dominio propio, déjenlo en `""`.
3. El repositorio debe ser **público** para que GitHub Pages funcione sin cuenta de pago.
4. Vayan a **Settings → Pages**, elijan **Deploy from a branch**, rama `main`, carpeta `/ (root)` y guarden.
5. En uno o dos minutos la URL aparece en esa misma pantalla.

## Cómo está organizado el sitio

La navegación sigue tres preguntas, no tres tipos de producto.

```
/                          Portada
/como-funciona/            1. Cómo funciona el sistema
/lo-que-encontramos/       2. Las investigaciones y la evidencia
  /casos/                     Registro de casos
/que-deberia-cambiar/      3. Las doce medidas
  /que-deberia-cambiar/herramientas/   Las diecisiete herramientas
  /que-deberia-cambiar/propuestas/     Los dieciocho cambios de fondo
  /medidas/:nombre/                    Página de cada medida
  /herramientas/:nombre/               Página de cada herramienta
/sobre/                    Quiénes somos y cómo trabajamos
/cambios/                  Bitácora de actualizaciones
```

## Cambiar la línea gráfica

**Todo el diseño se controla desde dos lugares.** No hace falta tocar el HTML.

1. **Colores y tipografías:** el bloque `:root` al inicio de `assets/css/main.css`. Está comentado línea por línea. Cambiando esos valores cambia el sitio completo.
2. **Las fuentes que se cargan:** la etiqueta `<link>` de Google Fonts en `_layouts/default.html`.

La línea gráfica actual es provisional y viene de los informes *Experimentando con la pobreza* (2020) y *Vigilando a las "buenas madres"* (2021): fondo crema, coral como acento, negro para bloques y titulares condensados en mayúsculas.

El único elemento propio del sitio es la franja con la escala de 0 a 100 que aparece en la portada, tomada de la carátula de *Experimentando con la pobreza*. Está en `_includes/escala.html` y se puede quitar borrando la línea `{% include escala.html %}` de `index.html`.

## Registro vivo: fechas y versiones

Cada medida, herramienta y página tiene en su encabezado dos campos:

```yaml
actualizado: 2026-07-23
version: "1.0"
```

Con eso el sitio muestra automáticamente "Última actualización: 23 de julio de 2026 · versión 1.0". Cuando editen algo, cambien esos dos valores.

Además hay una **bitácora** en `/cambios/`. Para agregar una entrada, editen `_data/bitacora.yml` y pongan un bloque nuevo arriba de los demás:

```yaml
- fecha: 2026-08-15
  titulo: "Se ajustó la medida 7"
  tipo: "Corrección"
  detalle: "Se precisaron los plazos de notificación tras comentarios del DNP."
```

## Dónde está cada cosa

| Qué quieren cambiar | Dónde |
|---|---|
| Nombre y descripción del sitio | `_config.yml` |
| Colores y tipografías | Bloque `:root` de `assets/css/main.css` |
| Una medida | Archivo en `_medidas/` |
| Una herramienta | Archivo en `_herramientas/` |
| Las investigaciones publicadas | `_data/publicaciones.yml` |
| Las cinco etapas del sistema | `_data/etapas.yml` |
| Las cuatro entidades del filtro | `_data/entidades.yml` |
| Los dieciocho cambios propuestos | `_data/propuestas.yml` |
| Bloques de la caja de herramientas | `_data/secciones_herramientas.yml` |
| Bitácora de cambios | `_data/bitacora.yml` |
| Portada | `index.html` |

## Cómo agregar una medida

Cada medida es un archivo Markdown en `_medidas/` con este encabezado:

```yaml
---
actualizado: 2026-07-23
version: "1.0"
title: "Título de la medida"
numero: 7
etapa: 4                                     # 1 a 5
reforma: 1                                   # número del cambio propuesto de origen
alcance: plena                               # plena | parcial
entidades: [dnp, territoriales, programas]   # dnp | territoriales | programas | registros
resumen: "Una frase que aparece en la tarjeta."
---
```

Secciones del cuerpo: `## Qué propone`, `## El problema que resuelve`, `## Quiénes participan`, `## Qué se gana`, `## Cómo implementarlo`, y una cita final con el aprendizaje clave.

## Cómo agregar una herramienta

Archivo en `_herramientas/`:

```yaml
---
actualizado: 2026-07-23
version: "1.0"
title: "Nombre de la herramienta"
numero: "9"
orden: 9                 # define el orden y la navegación entre herramientas
seccion: s3              # s1 a s5, según _data/secciones_herramientas.yml
tipo: "Formato de registro"
resumen: "Una frase que aparece en la tarjeta."
medidas: [4, 12]         # medidas con las que se enlaza, en ambos sentidos
---
```

Clases de CSS disponibles para el cuerpo:

- `<div class="tabla-scroll"><table class="tabla-h">…</table></div>` para tablas. Variantes: `tabla-campos`, `tabla-sino`, `tabla-lenguaje`.
- `<ul class="checklist"><li><span class="casilla"></span>Texto</li></ul>` para listas de verificación.
- `<div class="semaforo">` con bloques `sem sem-verde`, `sem-amarillo`, `sem-rojo`.
- `<div class="plantilla">` para modelos de comunicación.
- `<div class="paso">` con `<h2><span class="paso-num">Paso 1</span>Título</h2>` para protocolos.

## Pendientes conocidos

- Definir el nombre final del sitio y actualizarlo en `_config.yml`.
- Agregar el correo de contacto y las redes de Karisma en `sobre/index.md`.
- Verificar que los enlaces de `_data/publicaciones.yml` sigan activos. Los resúmenes de *Experimentando con la pobreza* y *Vigilando a las "buenas madres"* están escritos a partir de los documentos completos; los de las otras cuatro publicaciones son más generales y conviene revisarlos con quien las escribió.
- Abrir el registro de casos cuando estén listos el formulario, la clasificación de daños y el protocolo de consentimiento.
- Dos inconsistencias del playbook fuente que conviene resolver con las autoras. La medida 2 aparece como incorporación plena en el capítulo 3 pero la tabla 4 clasifica la reforma 18 como parcial (el sitio sigue al capítulo 3). El capítulo 4 tiene dos recursos numerados 12, que aquí quedaron como 12a y 12b.
- La herramienta 13 se basa en una imagen del documento original. En el sitio quedó como tabla de contenidos mínimos.
