<template>
  <div>
    <header class="cabecalho">
      <div class="container">
        <h1 aria-label="aluraGeek">
          <LogoAluraGeek alt="logotipo da AluraGeek" />
        </h1>
        <InputPesquisa
          class="cabecalho__pesquisa-desktop"
          placeholder="O que deseja encontrar?"
        />
      </div>
      <BotaoModelo
        modelo="modelo-2"
        rotulo="Login"
        @click="opcaoModal(true)"
      />
      <button
        class="cabecalho__botao-pesquisa"
        aria-label="pesquisa"
        @click="filtro = !filtro"
      >
        <i class="fas fa-magnifying-glass" />
      </button>
      <InputPesquisa
        v-if="filtro"
        class="cabecalho__botao-pesquisa"
        placeholder="O que deseja encontrar?"
      />
    </header>
    <ModalPadrao
      :feedback="feedbackModal"
      @fecharModal="opcaoModal(false)"
    >
      <template #conteudo>
        <FormularioLogin />
      </template>
    </ModalPadrao>
  </div>
</template>
<script>
import BotaoModelo from "./botaoModelo.vue";
import InputPesquisa from "./inputPesquisa.vue";
import LogoAluraGeek from "../assets/svg/logoAluraGeek.vue";
import ModalPadrao from "./modalPadrao.vue"
import FormularioLogin from './formularioLogin.vue';

export default {
  components: {
    BotaoModelo,
    InputPesquisa,
    LogoAluraGeek,
    ModalPadrao,
    FormularioLogin,
  },
  data() {
    return {
      filtro: false,
      feedbackModal: false,
    };
  },
    methods: {
    opcaoModal(op) {
      this.feedbackModal = op
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
