<template>
  <fieldset class="inputados">
    <input
      :id="chave"
      v-model="valor"
      class="inputados__dados"
      :type="tipo"
      step="any"
      required
      @input="dados($event.target.value)"
    >
    <label
      :for="chave"
      class="inputados__Legenda"
    >
      {{ rotulo }}
    </label>
  </fieldset>
</template>
<script>
export default {
  props: {
    chave: {
      type: String,
      required: true,
    },
    rotulo: {
      type: String,
      required: true,
    },
    tipo: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      valor: "",
    };
  },
  methods: {
    dados(input) {
      this.$emit("registro", input);
    },
  },
};
</script>
<style>
.inputados {
  display: flex;
  flex-direction:column-reverse;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  height: 56px;
  margin: 1rem 0;
  padding: 0.5rem;
  position: relative;
  width: 100%;
  z-index: 1;
}
.inputados__dados {
  width: 100%;
}
.inputados__dados:focus,
.inputados__dados:before,
.inputados__dados:valid {
  outline: none;
}

.inputados__Legenda {
  color: var(--texto-desfocado);
  font-size: 0.75rem;
  margin: 0.2rem;
  transition: 0.2s ease all;
  pointer-events: none;
  position: absolute;
  top:0.2rem;
}
.inputados__dados:focus + .inputados__Legenda,
.inputados__dados:valid + .inputados__Legenda {
  color: var(--texto-destaque);
  font-weight: 700;
}
</style>
