---
actualizado: 2026-07-23
version: "1.0"
title: "Formato de trazabilidad de solicitudes"
numero: "9"
orden: 9
seccion: s3
tipo: "Formato de registro"
resumen: "Registra cada solicitud desde que se radica hasta que se cierra, con estado verificable y responsable identificado en todo momento."
medidas: [4, 12]
---

Este formato permite registrar y hacer seguimiento a cada solicitud presentada por la ciudadanía desde su radicación hasta su cierre. Su principal fortaleza es que hace visible el recorrido del trámite, identifica qué entidades intervinieron, cuánto tiempo permaneció en cada una, qué actuaciones se realizaron y en qué etapa se encuentra.

En el RUI, donde la actualización y corrección de la información puede involucrar varios registros administrativos y diferentes instituciones, contar con un mecanismo único de trazabilidad traslada la carga de coordinación desde la ciudadanía hacia el Estado y facilita un seguimiento continuo durante toda la transición y operación del sistema.

<p class="nota-fuente">La estructura retoma elementos del Standard Cost Model promovido por la OCDE para identificar y reducir cargas administrativas, así como prácticas de seguimiento integral de trámites de modelos de atención integrada como ServiceOntario, Services Québec y Service NSW, donde cada solicitud cuenta con un identificador único, un estado verificable y seguimiento continuo.</p>

<div class="tabla-scroll">
<table class="tabla-h tabla-campos">
<thead><tr><th>Campo</th><th class="col-obs">Información</th></tr></thead>
<tbody>
<tr><th scope="row">Número único de solicitud</th><td></td></tr>
<tr><th scope="row">Fecha de radicación</th><td></td></tr>
<tr><th scope="row">Canal de ingreso</th><td></td></tr>
<tr><th scope="row">Tipo de solicitud</th><td class="opciones"><span class="op"><span class="casilla"></span>Autodeclaración</span><span class="op"><span class="casilla"></span>Actualización</span><span class="op"><span class="casilla"></span>Corrección</span><span class="op"><span class="casilla"></span>Varios</span></td></tr>
<tr><th scope="row">Persona solicitante</th><td></td></tr>
<tr><th scope="row">Entidad que recibió la solicitud</th><td></td></tr>
<tr><th scope="row">Entidades involucradas</th><td></td></tr>
<tr><th scope="row">Registros administrativos que requieren actualización</th><td></td></tr>
<tr><th scope="row">Estado actual</th><td class="opciones"><span class="op"><span class="casilla"></span>Recibida</span><span class="op"><span class="casilla"></span>En revisión</span><span class="op"><span class="casilla"></span>Remitida</span><span class="op"><span class="casilla"></span>Pendiente de otra entidad</span><span class="op"><span class="casilla"></span>Resuelta</span><span class="op"><span class="casilla"></span>Cerrada</span></td></tr>
<tr><th scope="row">Responsable actual</th><td></td></tr>
<tr><th scope="row">Fecha de la última actuación</th><td></td></tr>
<tr><th scope="row">Próxima actuación prevista</th><td></td></tr>
<tr><th scope="row">Fecha límite de respuesta</th><td></td></tr>
<tr><th scope="row">¿La ciudadanía debe realizar alguna acción?</th><td class="opciones"><span class="op"><span class="casilla"></span>Sí</span><span class="op"><span class="casilla"></span>No</span><span class="op-texto">¿Cuál?</span></td></tr>
<tr><th scope="row">Fecha de notificación</th><td></td></tr>
<tr><th scope="row">Resultado final</th><td></td></tr>
<tr><th scope="row">Observaciones</th><td></td></tr>
</tbody>
</table>
</div>
