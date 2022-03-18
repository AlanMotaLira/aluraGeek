<template>
  <div
    v-if="feedback"
    class="overlay"
  >
    <div
      class="corpo"
    >
      <button
        class="sair"
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
  height: auto;
  margin:6rem auto;
  padding: 2%;
  position: relative;
  width: 90vw;
  z-index: 9999;
}
.sair{
  color:var(--botao-padrao);
  cursor: pointer;
  font-size: 1.5rem;
  position: absolute;
  right: 1.5rem;
  transition: 500ms all;
  top: 1.5rem;
}
.sair:hover{
  color: var(--botao-padrao-80);
}
.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9998;
}

@media screen and (min-width: 768px) {
  .corpo{
    width: 80vw;
  }
}

@media screen and (min-width: 768px) {
    .corpo{
    width: 50vw;
  }
}
</style>

