<template>
  <div>
    <router-view />
    <footer>
      <RodapePage />
      <section class="footer_fim">
        <h4>Desenvolvido por Alan Lira</h4>
        <h3>2022</h3>
      </section>
    </footer>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import "./assets/styles/reset.css";
import "./assets/styles/styles-global.css";
import RodapePage from "./components/rodapePage.vue";

export default {
  components: {
    RodapePage,
  }
};
</script>

<style>
header {
  background: var(--pagina-padrao);
}
main {
  background: var(--pagina-claro);
}
footer {
  background: var(--rodape-padrao);
}
.footer_fim {
  background: var(--pagina-padrao);
  font-size: 1rem;
  height: 6.5rem;
  line-height: 2rem;
  text-align: center;
  padding: 2rem 0;
}
</style>
