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
  border: 1px solid var(--botao-padrao);
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  height: 40px;
  padding: 0.75rem 1rem;
  text-align: center;
  transition: 500ms all;
  width: 133px;
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

@media screen and (min-width: 768px) {
  .botao {
    font-size: 0.875rem;
    font-weight: 600;
    width: 166px;
  }
}

@media screen and (min-width: 1136px) {
  .botao {
    font-size: 1rem;
    font-weight: 400;
    height: 51px;
    width: 182px;
  }
}
</style>
