<template>
  <div>
    <header class="cabecalho">
      <div class="container">
        <h1 aria-label="aluraGeek">
          <Logo-alura-geek alt="logotipo da AluraGeek" />
        </h1>
        <Input-pesquisa
          class="cabecalho__pesquisa-desktop"
          placeholder="O que deseja encontrar?"
        />
      </div>
      <Botao-modelo
        modelo="modelo-2"
        rotulo="Login"
        @click="fecharModal()"
      />
      <button
        class="cabecalho__botao-pesquisa"
        aria-label="pesquisa"
        @click="filtro = !filtro"
      >
        <i class="fas fa-magnifying-glass" />
      </button>
      <Input-pesquisa
        v-if="filtro"
        class="cabecalho__botao-pesquisa"
        placeholder="O que deseja encontrar?"
      />
    </header>
    <Modal-padrao
      :feedback="feedbackModal"
      @fecharModal="fecharModal()"
    >
      <template #conteudo>
        <Formulario-login />
      </template>
    </Modal-padrao>
  </div>
</template>
<script>
import botaoModelo from "./botaoModelo.vue";
import inputPesquisa from "./inputPesquisa.vue";
import formularioLogin from "./formularioLogin.vue"
import logoAluraGeek from "../assets/svg/logoAluraGeek.vue";
import modalPadrao from "./modalPadrao.vue"

export default {
  components: {
    "Botao-modelo": botaoModelo,
    "Input-pesquisa": inputPesquisa,
    "Formulario-login":formularioLogin,
    "Logo-alura-geek": logoAluraGeek,
    "Modal-padrao":modalPadrao,
  },
  data() {
    return {
      filtro: false,
      feedbackModal: true,
    };
  },
    methods: {
    fecharModal() {
      this.feedbackModal = false;
    }
  },
};
</script>
<style scoped>
.cabecalho {
  display: flex;
  flex-wrap:wrap;
  align-items: center;
  flex-direction: row;
  height: 72px;
  justify-content: space-around;
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
  .cabecalho{
    justify-content: space-between;
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
  }
}
</style>
