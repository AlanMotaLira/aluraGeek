<template>
  <fieldset>
    <div class="pesquisa">
      <input
        id="filtro"
        v-model="dadosFiltro"
        class="pesquisa__input"
        type="search"
        :placeholder="placeholder"
        @input="subirDados($event.target.value)"
      >
      <label for="filtro">
        <i
          class="fas fa-magnifying-glass"
        />
      </label>
    </div>
  </fieldset>
</template>
<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    placeholder: {
      type: String,
    },
  },
  data(){
    return{
      dadosFiltro:""
    }
  },
  methods: {
    subirDados(input) {
      this.$emit("pesquisa", input);
    },
  },
};
</script>
<style scoped>
.pesquisa {
  display: flex;
  align-items: center;
  background-color: var(--pagina-claro);
  border: none;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 400;
  justify-content: space-between;
  margin: 0.5rem;
  height: auto;
  padding: 8px 16px;
  vertical-align: middle;
  width: 272px;
}
.pesquisa:focus-within {
  border: 2px solid var(--botao-padrao);
}
.pesquisa__input {
  background: transparent;
  border: none;
  text-align: center;
  width: 100%;
}
.pesquisa__input:focus {
  background: transparent;
  outline: none;
}
fieldset {
  border: none;
  margin: 0 2rem;
  z-index:2;
}

@media screen and (min-width: 768px) {
  .pesquisa {
    margin: 0;
    width: 272px;
  }

  @media screen and (min-width: 1136px) {
    .pesquisa {
      width: 393px;
    }
  }
}
</style>
