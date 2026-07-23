/* Filtros del micrositio. JavaScript sin dependencias, compatible con GitHub Pages. */
(function () {
  "use strict";

  function normaliza(t) {
    return t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  /* ---------- Filtros de medidas ---------- */
  var grid = document.querySelector("[data-grid-medidas]");
  if (grid) {
    var cards = [].slice.call(grid.querySelectorAll(".card-medida"));
    var pasos = [].slice.call(document.querySelectorAll(".ruta-paso button"));
    var botonesEnt = [].slice.call(document.querySelectorAll(".filtros-entidad button"));
    var buscador = document.getElementById("buscador-medidas");
    var limpiar = document.getElementById("limpiar-filtros");
    var contador = document.getElementById("contador-medidas");
    var vacio = document.getElementById("sin-resultados");
    var encabezados = [].slice.call(document.querySelectorAll(".encabezado-etapa"));
    var etapaActiva = null;
    var entidadActiva = null;

    function aplica() {
      var q = buscador ? normaliza(buscador.value.trim()) : "";
      var visibles = 0;
      cards.forEach(function (card) {
        var okEtapa = !etapaActiva || card.getAttribute("data-etapa") === etapaActiva;
        var ents = (card.getAttribute("data-entidades") || "").split(" ");
        var okEnt = !entidadActiva || ents.indexOf(entidadActiva) !== -1;
        var okTexto = !q || normaliza(card.textContent).indexOf(q) !== -1;
        var mostrar = okEtapa && okEnt && okTexto;
        card.classList.toggle("visible", mostrar);
        if (mostrar) visibles++;
      });
      encabezados.forEach(function (enc) {
        var et = enc.getAttribute("data-etapa");
        var hay = cards.some(function (c) {
          return c.getAttribute("data-etapa") === et && c.classList.contains("visible");
        });
        enc.style.display = hay ? "" : "none";
      });
      if (contador) {
        contador.textContent = visibles === 12
          ? "Mostrando las 12 medidas"
          : "Mostrando " + visibles + (visibles === 1 ? " medida" : " medidas") + " de 12";
      }
      if (vacio) vacio.classList.toggle("visible", visibles === 0);
      if (limpiar) limpiar.classList.toggle("visible", Boolean(etapaActiva || entidadActiva || q));
    }

    pasos.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var et = btn.parentElement.getAttribute("data-etapa");
        etapaActiva = etapaActiva === et ? null : et;
        pasos.forEach(function (b) {
          b.setAttribute("aria-pressed", b.parentElement.getAttribute("data-etapa") === etapaActiva ? "true" : "false");
        });
        aplica();
      });
    });

    botonesEnt.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var id = btn.getAttribute("data-entidad");
        entidadActiva = entidadActiva === id ? null : id;
        botonesEnt.forEach(function (b) {
          b.setAttribute("aria-pressed", b.getAttribute("data-entidad") === entidadActiva ? "true" : "false");
        });
        aplica();
      });
    });

    if (buscador) buscador.addEventListener("input", aplica);
    if (limpiar) {
      limpiar.addEventListener("click", function () {
        etapaActiva = null;
        entidadActiva = null;
        if (buscador) buscador.value = "";
        pasos.concat(botonesEnt).forEach(function (b) { b.setAttribute("aria-pressed", "false"); });
        aplica();
      });
    }
    aplica();
  }

  /* ---------- Filtro de propuestas ---------- */
  var gridP = document.querySelector("[data-grid-propuestas]");
  if (gridP) {
    var cardsP = [].slice.call(gridP.querySelectorAll(".card-propuesta"));
    var botonesP = [].slice.call(document.querySelectorAll(".filtros-propuestas button"));
    var activo = "todas";

    function aplicaP() {
      cardsP.forEach(function (c) {
        c.classList.toggle("visible", activo === "todas" || c.getAttribute("data-alcance") === activo);
      });
    }
    botonesP.forEach(function (btn) {
      btn.addEventListener("click", function () {
        activo = btn.getAttribute("data-alcance");
        botonesP.forEach(function (b) { b.setAttribute("aria-pressed", b === btn ? "true" : "false"); });
        aplicaP();
      });
    });
    aplicaP();
  }
})();
