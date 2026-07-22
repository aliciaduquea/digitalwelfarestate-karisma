---
layout: page
title: "Las reformas que orientan el playbook"
eyebrow: "Origen"
intro: "Las recomendaciones no se elaboraron desde cero. Provienen de la agenda de investigación e incidencia de Karisma sobre los sistemas de focalización social, reunida en dieciocho reformas priorizadas desde un enfoque de derechos humanos."
permalink: /playbook/reformas/
ancho: completo
---

<div class="contenedor estrecho" markdown="1">

Las reformas se apoyan en un corpus previo que incluye *Experimentando con la pobreza* (2020), *Vigilando a las "buenas madres"* (2021), *Datos y dignidad* (2022), las *Recomendaciones de derechos humanos para la regulación de sistemas de información de protección social* (2023) y los comentarios de Karisma al proyecto de decreto sobre el RUI (2024).

La priorización no se hizo por conveniencia política ni por facilidad de implementación. La pregunta fue cuáles reformas resultan más urgentes para asegurar que la transición al RUI no reproduzca, profundice ni reempaque los problemas ya identificados en el Sisbén. Cada reforma tiene un alcance distinto dentro del playbook. Las de **incorporación plena** se traducen directamente en plays y herramientas. Las de **incorporación parcial** entran en su dimensión operativa, aunque su versión completa requiere decisiones que exceden este documento. Las que quedan **por fuera del alcance inmediato** siguen siendo necesarias, pero exigen cambios normativos, decisiones estructurales o procesos de incidencia que no se resuelven con orientaciones para administradores.

</div>

<div class="contenedor">
  <div class="filtros-reformas" role="group" aria-label="Filtrar reformas por alcance">
    <button type="button" data-alcance="todas" aria-pressed="true">Todas (18)</button>
    <button type="button" data-alcance="plena" aria-pressed="false">Incorporación plena</button>
    <button type="button" data-alcance="parcial" aria-pressed="false">Incorporación parcial</button>
    <button type="button" data-alcance="fuera" aria-pressed="false">Fuera del alcance inmediato</button>
  </div>

  <ul class="grid-reformas" data-grid-reformas>
    {% assign plays_ordenados = site.plays | sort: "numero" %}
    {% for r in site.data.reformas.items %}
    {% assign grupo = site.data.reformas.grupos | where: "id", r.grupo | first %}
    <li class="card-reforma visible" data-alcance="{{ r.alcance }}">
      <div class="cr-cab">
        <span class="cr-num">Reforma {{ r.numero }} · {{ grupo.nombre }}</span>
        <span class="chip chip-alcance alcance-{{ r.alcance }}">{% if r.alcance == 'fuera' %}Fuera del alcance inmediato{% else %}Incorporación {{ r.alcance }}{% endif %}</span>
      </div>
      <h3>{{ r.titulo }}</h3>
      <p>{{ r.traduccion }}</p>
      {% if r.play %}
        {% for p in plays_ordenados %}
          {% if p.numero == r.play %}
          <a class="cr-play" href="{{ p.url | relative_url }}">Ver Play {{ p.numero }}. {{ p.title }} →</a>
          {% endif %}
        {% endfor %}
      {% endif %}
    </li>
    {% endfor %}
  </ul>
</div>
