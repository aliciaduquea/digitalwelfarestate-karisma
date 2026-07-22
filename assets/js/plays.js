/* Filtros del micrositio: rejilla de plays y tabla de reformas.
   JavaScript sin dependencias, compatible con GitHub Pages. */
(function () {
  "use strict";

  /* ---------- Filtro de plays (página /playbook/) ---------- */
  var grid = document.querySelector("[data-grid-plays]");
  if (grid) {
    var cards = Array.prototype.slice.call(grid.querySelectorAll(".card-play"));
    var pasos = Array.prototype.slice.call(document.querySelectorAll(".ruta-paso button"));
    var buscador = document.getElementById("buscador-plays");
    var limpiar = document.getElementById("limpiar-filtros");
    var contador = document.getElementById("contador-plays");
    var vacio = document.getElementById("sin-resultados");
    var encabezados = Array.prototype.slice.call(document.querySelectorAll(".encabezado-etapa"));
    var etapaActiva = null;

    function normaliza(texto) {
      return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
    }

    function aplica() {
      var q = buscador ? normaliza(buscador.value.trim()) : "";
      var visibles = 0;
      cards.forEach(function (card) {
        var coincideEtapa = !etapaActiva || card.getAttribute("data-etapa") === etapaActiva;
        var coincideTexto = !q || normaliza(card.textContent).indexOf(q) !== -1;
        var mostrar = coincideEtapa && coincideTexto;
        card.classList.toggle("visible", mostrar);
        if (mostrar) visibles++;
      });
      encabezados.forEach(function (enc) {
        var etapa = enc.getAttribute("data-etapa");
        var hayVisibles = cards.some(function (c) {
          return c.getAttribute("data-etapa") === etapa && c.classList.contains("visible");
        });
        enc.style.display = hayVisibles ? "" : "none";
      });
      if (contador) {
        contador.textContent =
          visibles === 12
            ? "Mostrando los 12 plays"
            : "Mostrando " + visibles + (visibles === 1 ? " play" : " plays") + " de 12";
      }
      if (vacio) vacio.classList.toggle("visible", visibles === 0);
      if (limpiar) limpiar.classList.toggle("visible", Boolean(etapaActiva || q));
    }

    pasos.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var etapa = btn.parentElement.getAttribute("data-etapa");
        etapaActiva = etapaActiva === etapa ? null : etapa;
        pasos.forEach(function (b) {
          b.setAttribute(
            "aria-pressed",
            b.parentElement.getAttribute("data-etapa") === etapaActiva ? "true" : "false"
          );
        });
        aplica();
      });
    });

    if (buscador) buscador.addEventListener("input", aplica);
    if (limpiar) {
      limpiar.addEventListener("click", function () {
        etapaActiva = null;
        if (buscador) buscador.value = "";
        pasos.forEach(function (b) { b.setAttribute("aria-pressed", "false"); });
        aplica();
      });
    }
    aplica();
  }

  /* ---------- Filtro de reformas (página /playbook/reformas/) ---------- */
  var gridReformas = document.querySelector("[data-grid-reformas]");
  if (gridReformas) {
    var cardsR = Array.prototype.slice.call(gridReformas.querySelectorAll(".card-reforma"));
    var botones = Array.prototype.slice.call(document.querySelectorAll(".filtros-reformas button"));
    var alcanceActivo = "todas";

    function aplicaReformas() {
      cardsR.forEach(function (card) {
        var mostrar = alcanceActivo === "todas" || card.getAttribute("data-alcance") === alcanceActivo;
        card.classList.toggle("visible", mostrar);
      });
    }

    botones.forEach(function (btn) {
      btn.addEventListener("click", function () {
        alcanceActivo = btn.getAttribute("data-alcance");
        botones.forEach(function (b) {
          b.setAttribute("aria-pressed", b === btn ? "true" : "false");
        });
        aplicaReformas();
      });
    });
    aplicaReformas();
  }
})();
