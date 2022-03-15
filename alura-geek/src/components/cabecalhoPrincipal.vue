<template>
  <div>
    <header class="cabecalho">
      <div class="container">
        <Logo-alura-geek alt="logotipo da HZC" />
        <Input-pesquisa
          class="cabecalho__pesquisa-desktop"
          placeholder="O que deseja encontrar?"
        />
      </div>
      <Botao-modelo
        modelo="modelo-2"
        rotulo="Login"
      />
      <button
        class="cabecalho__botao-pesquisa"
        aria-label="pesquisa"
        @click="filtro = !filtro"
      >
        <i class="fas fa-magnifying-glass" />
      </button>
    </header>
    <Input-pesquisa
      v-if="filtro"
      placeholder="O que deseja encontrar?"
    />
  </div>
</template>
<script>
import botaoModelo from "./botaoModelo.vue";
import inputPesquisa from "./inputPesquisa.vue";
import logoAluraGeek from "../assets/svg/logoAluraGeek.vue";

export default {
  components: {
    "Botao-modelo": botaoModelo,
    "Input-pesquisa": inputPesquisa,
    "Logo-alura-geek": logoAluraGeek,
  },
  data() {
    return {
      filtro: false,
    };
  },
};
</script>
<style scoped>
.cabecalho {
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 72px;
  justify-content: space-around;
  padding: 16px;
}
.cabecalho__botao-pesquisa {
  color: var(--texto-padrao);
  cursor: pointer;
  margin: 0 1rem;
}
.cabecalho__pesquisa-desktop{
  display: none;
}
.container {
  display: flex;
  vertical-align: middle;
}

@media screen and (min-width: 768px) {
  .cabecalho {
    padding: 16px 32px;
  }
  .cabecalho__botao-pesquisa {
    display: none;
  }
  .cabecalho__pesquisa-desktop{
    display: initial;
  }
}

@media screen and (min-width: 1136px) {
  .cabecalho {
    height: 115px;
    margin: 0px 100px;
    padding: 0px;
  }
}
</style>
