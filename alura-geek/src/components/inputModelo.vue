<template>
  <fieldset class="item">
    <label :for="chave" class="item__Legenda">
      {{ rotulo }}
    </label>
    <input
      :id="chave"
      v-model="valor"
      class="item__dados"
      :type="tipo"
      required
      @input="dados($event.target.value)"
    />
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
<style scoped>
.item {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  color: var(--texto-padrao);
  height: 56px;
  margin: 1rem 0;
  padding: 0.5rem;
  position: relative;
  width: 100%;
  z-index: 1;
}
.item__dados {
 width: 100%;
}
.item__dados:focus,
.item__dados:before,
.item__dados:valid {
  color: var(--texto-padrao);
  outline: none;
}
.item__Legenda{
    color:var(--texto-desfocado);
    font-size: 0.75rem;
    margin:0.2rem
}
</style>
