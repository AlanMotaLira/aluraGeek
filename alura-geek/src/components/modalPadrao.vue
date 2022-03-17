<template>
  <div
    v-if="feedback"
    class="overlay"
  >
    <div
      class="corpo"
    >
      <button
        class="login__sair"
        @click="fecharModal()"
      >
        <i
          class="fa-solid fa-circle-xmark"
          aria-label="retorna a pagina principal"
        />
      </button>
      <slot name="conteudo" />
    </div>
  </div>
</template>
<script>
export default {
  props:{
      feedback:{
          type:Boolean
      }
  },
  methods: {
    fecharModal() {
      this.$emit("fecharModal");
    },
  },
};
</script>
<style>
.corpo {
  display: flex;
  background: var(--pagina-claro);
  border-radius: 1rem;
  flex-direction: column;
  padding: 2%;
  position: relative;
  width: 90vw;
  height: 40vh;
  z-index: 9999;
  margin:6rem auto;
  }
  .login__sair{
  color:var(--botao-padrao-80);
  cursor: pointer;
  font-size: 1.5rem;
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
}
.login__sair:hover{
  color: tomato;
}
.overlay {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

@media screen and (min-width: 768px) {
  .corpo{
    width: 80vw;
    height: 50vh;
  }
}

@media screen and (min-width: 768px) {
    .corpo{
    width: 50vw;
    height: 80vh;
  }
}
</style>
