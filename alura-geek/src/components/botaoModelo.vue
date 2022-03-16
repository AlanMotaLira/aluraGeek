<template>
  <button :class="['botao', modelo]">
    {{ rotulo }}
  </button>
</template>
<script>
export default {
  props: {
    modelo: {
      type: String,
      required: true,
    },
    rotulo: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
.botao {
  align-items: center;
  border: 1px solid var(--botao-padrao);
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  height: 40px;
  text-align: center;
  transition: 500ms all;
  width: 119px;
}
.modelo-1 {
  background-color: var(--botao-padrao);
  color: var(--texto-claro);
}
.modelo-1:hover {
  background-color: var(--botao-padrao-80);
}
.modelo-2 {
  background-color: transparent;
  color: var(--texto-destaque);
}
.modelo-2:hover {
  background-color: var(--botao-padrao-20);
}
@media screen and (min-width: 1136px) {
  .botao {
    font-size: 1rem;
    font-weight: 400;
    height: 51px;
    width: 130px;
  }
}
</style>
