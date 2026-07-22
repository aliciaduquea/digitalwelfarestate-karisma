---
layout: page
title: "Del Sisbén al RUI"
eyebrow: "Contexto"
intro: "Colombia está reemplazando el instrumento con el que decide quién accede a los programas sociales. Esta página resume qué es el sistema, cómo funciona y qué cambia con el Registro Universal de Ingresos."
permalink: /playbook/contexto/
---

## Qué hace el sistema y por qué importa

Durante más de tres décadas, el Sisbén ha sido la puerta de entrada a subsidios, transferencias y otras formas de apoyo estatal en Colombia. El sistema recopila información sobre las condiciones de vida de los hogares, la procesa mediante un algoritmo de clasificación y entrega esa clasificación a las entidades que administran programas sociales, que la usan para decidir quién puede acceder a salud subsidiada, educación, transferencias monetarias y otros apoyos.

Por eso sus decisiones, procedimientos y errores tienen efectos directos en la vida de millones de personas. La forma en que se construye y se usa esta información está ligada a derechos fundamentales como la igualdad, el debido proceso, el mínimo vital y la vida digna. Su funcionamiento también ha permitido identificar problemas recurrentes que este playbook busca evitar en el nuevo sistema, entre ellos la falta de información clara para la ciudadanía, las dificultades para corregir errores, la carga de la prueba impuesta a las personas, los riesgos de estigmatización y las limitaciones en rendición de cuentas.

## Tres décadas en siete hitos

<ol class="linea-tiempo">
  <li><span class="lt-anio">1991 a 1994</span><p>La Constitución de 1991 ordena orientar el gasto público a la reducción de la pobreza. El CONPES Social 022 de 1994 crea la ficha de clasificación socioeconómica que da origen al Sisbén.</p></li>
  <li><span class="lt-anio">2001</span><p>El CONPES Social 055 origina el Sisbén II y la Ley 715 asigna al DNP la consolidación de la información del sistema.</p></li>
  <li><span class="lt-anio">2008</span><p>El CONPES Social 117 define el Sisbén III, con un índice de estándar de vida más preciso y una base de datos centralizada.</p></li>
  <li><span class="lt-anio">2016 a 2021</span><p>El CONPES 3877 declara estratégico el Sisbén IV. El sistema abandona el puntaje de 0 a 100 y adopta cuatro grupos (A, B, C y D) con técnicas de aprendizaje automático. Su implementación inicia en 2021.</p></li>
  <li><span class="lt-anio">2020</span><p>En plena pandemia, el Decreto 812 crea el Registro Social de Hogares (RSH), que integra el Sisbén con decenas de registros administrativos del Estado.</p></li>
  <li><span class="lt-anio">2023 a 2024</span><p>El Plan Nacional de Desarrollo (Ley 2294 de 2023) y el Decreto 875 de 2024 crean el Registro Universal de Ingresos (RUI), que reemplazará gradualmente al Sisbén.</p></li>
  <li><span class="lt-anio">2026</span><p>Inicia la implementación del RUI como instrumento de focalización, sobre la infraestructura del RSH y con un modelo de estimación de ingresos basado en registros administrativos.</p></li>
</ol>

## Cómo funciona, en cinco etapas

El playbook organiza sus recomendaciones siguiendo las cinco etapas del sistema. En cada una participan el DNP, las entidades territoriales, las entidades que administran programas sociales y las personas registradas.

<ul class="grid-etapas">
  {% for e in site.data.etapas %}
  <li data-etapa="{{ e.id }}"><strong>Etapa {{ e.id }}. {{ e.nombre }}</strong><p>{{ e.descripcion }}</p></li>
  {% endfor %}
</ul>

## Qué cambia con el RUI

La transformación principal está en la forma de producir y actualizar la información. Mientras el modelo tradicional dependía de encuestas periódicas y de solicitudes de actualización hechas por los hogares, el RUI se apoya en procesos permanentes de interoperabilidad entre registros administrativos de fuentes como la DIAN, la nómina electrónica y la PILA, junto con una autodeclaración anual. Una proporción creciente de la información con la que se caracteriza a las personas proviene de bases de datos generadas por otras entidades, públicas y en algunos casos privadas.

El RUI conserva, sin embargo, elementos centrales de los sistemas anteriores. La focalización sigue siendo el mecanismo para asignar recursos y programas sociales, y las entidades territoriales mantienen responsabilidades en la gestión y actualización de la información.

Esta transformación ha abierto debates sobre transparencia, gobernanza de datos, debido proceso y protección de derechos. La Fundación Karisma ha planteado la necesidad de fortalecer los mecanismos de supervisión, reclamación y corrección de la información, establecer reglas claras para la interoperabilidad y prevenir los riesgos de errores de clasificación y de exclusiones derivadas de información incompleta o ausente. El playbook parte de esa premisa. La experiencia acumulada con el Sisbén ofrece lecciones concretas para que el despliegue del RUI incorpore garantías desde su implementación.

<p><a class="boton primario" href="{{ '/playbook/' | relative_url }}">Ir a los plays</a></p>
