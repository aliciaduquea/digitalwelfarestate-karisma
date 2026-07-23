---
layout: page
title: "Los dieciocho cambios"
eyebrow: "De dónde salen las medidas"
entrada: "Investigando el Sisbén identificamos dieciocho cambios que este sistema necesita. No todos se pueden hacer desde el mismo lugar, y esa diferencia es la que organiza esta página."
permalink: /que-deberia-cambiar/propuestas/
actualizado: 2026-07-23
version: "1.0"
ancho: completo
---

<div class="contenedor estrecho" markdown="1">

Las medidas de esta página no se inventaron para el RUI. Vienen de años documentando cómo funciona el Sisbén en la práctica, en los trabajos que están reunidos en [lo que encontramos]({{ '/lo-que-encontramos/' | relative_url }}).

**Ocho se pueden aplicar ya.** Se convierten directamente en procedimientos, plazos, formatos y protocolos que una entidad puede adoptar con las competencias que hoy tiene.

**Cinco se pueden aplicar solo en parte.** Una porción se vuelve procedimiento, pero la versión completa necesita cambios normativos o decisiones institucionales más grandes. La guía desarrolla la parte aplicable y dice hasta dónde llega.

**Cinco necesitan decisiones de otro nivel.** Cambios en la ley, en el diseño del sistema o en la política social. Siguen siendo necesarios. Simplemente no se resuelven con orientaciones para quien opera el sistema.

</div>

<div class="contenedor">
  <div class="filtros-propuestas" role="group" aria-label="Filtrar por tipo de cambio">
    <button type="button" data-alcance="todas" aria-pressed="true">Los dieciocho</button>
    <button type="button" data-alcance="plena" aria-pressed="false">Se pueden aplicar ya</button>
    <button type="button" data-alcance="parcial" aria-pressed="false">Solo en parte</button>
    <button type="button" data-alcance="fuera" aria-pressed="false">Necesitan otro nivel</button>
  </div>

  <ul class="grid-propuestas" data-grid-propuestas>
    {% assign ms = site.medidas | sort: "numero" %}
    {% for r in site.data.propuestas.items %}
    {% assign grupo = site.data.propuestas.grupos | where: "id", r.grupo | first %}
    <li class="card-propuesta visible" data-alcance="{{ r.alcance }}">
      <div class="cp-cab">
        <span class="cp-num">{{ r.numero }}</span>
        <div class="cp-titulos">
          <span class="cp-grupo">{{ grupo.nombre }}</span>
          <h3>{{ r.titulo }}</h3>
        </div>
        <span class="chip chip-alcance alcance-{{ r.alcance }}">{% if r.alcance == 'fuera' %}Necesita otro nivel{% elsif r.alcance == 'parcial' %}Solo en parte{% else %}Se puede aplicar ya{% endif %}</span>
      </div>
      <p>{{ r.traduccion }}</p>
      {% if r.medida %}
        {% for m in ms %}
          {% if m.numero == r.medida %}
          <a class="enlace-flecha" href="{{ m.url | relative_url }}">Medida {{ m.numero }}. {{ m.title }}</a>
          {% endif %}
        {% endfor %}
      {% endif %}
    </li>
    {% endfor %}
  </ul>
</div>
