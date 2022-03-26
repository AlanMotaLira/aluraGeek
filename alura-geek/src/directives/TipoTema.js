import Vue from "vue";

Vue.directive("tipo-tema", {
  bind(el, binding) {
    el.addEventListener("click", () => {
      let conteudo = el.nextElementSibling;
      if (conteudo.style.display === "block") {
        conteudo.style.display = "none";
      } else {
        conteudo.style.display = "block";
      }
    });
  },
});
