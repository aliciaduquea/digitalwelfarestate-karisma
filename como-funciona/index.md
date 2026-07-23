---
layout: page
title: "Cómo funciona el sistema"
eyebrow: "Empiece aquí"
entrada: "Qué es el Sisbén, cómo decide, qué está cambiando con el Registro Universal de Ingresos y por qué eso importa para millones de personas."
permalink: /como-funciona/
actualizado: 2026-07-23
version: "1.0"
---

## Qué decide este sistema

Digamos que una familia necesita entrar al régimen subsidiado de salud, o recibir una transferencia monetaria. El Estado no evalúa caso por caso. Usa un sistema que recoge información sobre las condiciones de vida del hogar, la procesa con un algoritmo y le asigna al hogar una clasificación.

Esa clasificación viaja a las entidades que administran programas sociales, y ellas deciden con base en ella quién entra y quién no. El sistema, entonces, no reparte beneficios. Reparte un número. Pero de ese número dependen la salud, la educación y el ingreso de millones de personas.

Durante más de tres décadas ese sistema se llamó Sisbén. Ahora está siendo reemplazado por el Registro Universal de Ingresos, el RUI.

## Cómo llegamos hasta aquí

<ol class="linea-tiempo">
  <li><span class="lt-anio">1991 a 1994</span><p>La Constitución ordena orientar el gasto público a reducir la pobreza. En un contexto de reformas impulsadas por la crisis de la deuda, el país decide focalizar en lugar de universalizar. Nace la ficha de clasificación socioeconómica que da origen al Sisbén.</p></li>
  <li><span class="lt-anio">2001 y 2008</span><p>Dos cambios de metodología. El sistema afina cómo mide las condiciones de vida y centraliza la base de datos.</p></li>
  <li><span class="lt-anio">2016 a 2021</span><p>Llega el Sisbén IV y con él un cambio de fondo. El sistema deja de medir solo cómo vive la gente y empieza a estimar cuánto podría ganar. Abandona el puntaje de 0 a 100, adopta cuatro grupos y usa aprendizaje automático.</p></li>
  <li><span class="lt-anio">2020</span><p>En plena pandemia se crea el Registro Social de Hogares, que integra el Sisbén con decenas de bases de datos del Estado. La información deja de venir solo de la encuesta.</p></li>
  <li><span class="lt-anio">2023 y 2024</span><p>El Plan Nacional de Desarrollo y el Decreto 875 crean el Registro Universal de Ingresos, que reemplazará gradualmente al Sisbén.</p></li>
  <li><span class="lt-anio">2026</span><p>Arranca la implementación del RUI, con un modelo que estima los ingresos de cada persona cruzando registros administrativos.</p></li>
</ol>

## El sistema en cinco etapas

Para saber dónde puede fallar algo, ayuda ver el recorrido completo. Estas cinco etapas son las que organizan las propuestas de esta página.

<ul class="grid-etapas">
  {% for e in site.data.etapas %}
  <li data-etapa="{{ e.id }}"><strong>{{ e.id }}. {{ e.nombre }}</strong><p>{{ e.descripcion }}</p></li>
  {% endfor %}
</ul>

## Quién responde por qué

En el recorrido participan cuatro tipos de entidades, y saber cuál hace qué es la diferencia entre reclamar en el lugar correcto o dar vueltas durante meses.

<ul class="grid-campos">
  {% for ent in site.data.entidades %}
  <li><strong>{{ ent.completo }}</strong><p>{{ ent.descripcion }}</p></li>
  {% endfor %}
</ul>

## Qué cambia con el RUI

El cambio de fondo está en de dónde sale la información. Antes venía de una encuesta que un funcionario aplicaba en la casa, y de las actualizaciones que pedía la propia familia. Ahora viene, sobre todo, del cruce permanente de registros administrativos: lo que reporta la DIAN, la nómina electrónica, la planilla de aportes a seguridad social. A eso se suma una autodeclaración que cada persona mayor de edad debe hacer al menos una vez al año.

Varias cosas se mantienen. Se sigue focalizando en lugar de universalizar, y los municipios siguen atendiendo a la gente.

El cambio abre riesgos nuevos y bastante concretos. Un dato equivocado en una base de datos que la persona nunca vio puede llegar hasta su clasificación final. La clasificación puede cambiar sola, por una actualización automática, sin que nadie avise. Y si el error está en el registro de otra entidad, es la persona quien tiene que ir a corregirlo allá, cargando con la coordinación entre instituciones que el Estado no hizo.

También abre una oportunidad, y por eso existe esta página. El sistema se está construyendo ahora. Las decisiones sobre plazos, avisos, canales y rutas de reclamo todavía se pueden tomar de otra manera.

<p class="cta-final"><a class="boton" href="{{ '/que-deberia-cambiar/' | relative_url }}">Ver qué debería cambiar</a></p>
