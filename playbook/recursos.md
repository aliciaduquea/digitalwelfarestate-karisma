---
layout: page
title: "Caja de herramientas"
eyebrow: "Instrumentos prácticos"
intro: "Formatos, plantillas, listas de verificación y matrices para aplicar los plays. Cada herramienta puede usarse de manera independiente o como parte del proceso completo, según las funciones de cada entidad."
permalink: /playbook/recursos/
---

<p class="aviso">Las versiones descargables de cada herramienta estarán disponibles próximamente. Mientras tanto, cada ficha describe el instrumento y los plays con los que se usa.</p>

{% assign plays_ordenados = site.plays | sort: "numero" %}
{% for s in site.data.recursos.secciones %}
<section class="seccion-recursos" id="{{ s.id }}">
  <h2>{{ s.nombre }}</h2>
  <p class="desc">{{ s.descripcion }}</p>
  {% for r in site.data.recursos.items %}
  {% if r.seccion == s.id %}
  <article class="ficha-recurso" id="{{ r.id }}">
    <span class="fr-num">Recurso {{ r.numero }}</span>
    <h3>{{ r.titulo }}</h3>
    <p>{{ r.descripcion }}</p>
    <div class="fr-plays">
      {% for num in r.plays %}
        {% for p in plays_ordenados %}
          {% if p.numero == num %}
          <a href="{{ p.url | relative_url }}">Play {{ p.numero }}. {{ p.title }}</a>
          {% endif %}
        {% endfor %}
      {% endfor %}
    </div>
  </article>
  {% endif %}
  {% endfor %}
</section>
{% endfor %}
