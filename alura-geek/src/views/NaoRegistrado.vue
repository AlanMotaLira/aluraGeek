<template>
  <section class="page pageHome">
    <h2 class="feedback">
      Retornar para a
      <router-link
        :to="{ name: 'home' }"
      >
        Página Inicial
      </router-link>
    </h2>
    <FormularioLogin />
  </section>
</template>

<script>
import FormularioLogin from "../components/formularioLogin.vue";
export default {
  components: {
    FormularioLogin,
  },
};
</script>

<style scoped>
.pageHome {
  padding: 4rem 1rem 0 1rem;
}
.feedback {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 700;
}
a {
  color: var(--texto-destaque);
  cursor: pointer;
  margin: 0 0.6rem;
}
a {
  color: var(--botao-padrao-80);
}
@media screen and (min-width: 768px) {
  .pageHome {
    padding: 2rem;
  }
}

@media screen and (min-width: 768px) {
  .pageHome {
    padding: 4rem 10rem 0 10rem;
  }
}
</style>
