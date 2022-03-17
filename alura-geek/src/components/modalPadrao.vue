<template>
  <div
    v-if="feedback"
    class="overlay"
    @click="fecharModal()"
  >
    <div
      class="corpo"
    >
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
    width: 80vw
  }
}

@media screen and (min-width: 768px) {
    .corpo{
    width: 50vw
  }
}
</style>
