<template>
  <div>
    <section class="page cabecalho">
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
        v-show="!perfilAtivo"
        modelo="modelo-2"
        rotulo="Login"
        @click="opcaoModal(true)"
      />
      <p v-show="perfilAtivo"><i class="fa fa-user"></i> {{perfilAtivo}}</p>
      <button v-show="perfilAtivo" @click="efetuarLogout()" >sair</button>
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
    </section>
    <ModalPadrao
      :feedback="feedbackModal"
      @fecharModal="opcaoModal(false)"
    >
      <template #conteudo>
        <FormularioLogin @fecharModal="opcaoModal(false)" />
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
      perfilAtivo:!localStorage.getItem("usuario")?false:localStorage.getItem("usuario").toUpperCase(),
      filtro: false,
      feedbackModal: false,
    };
  },
    methods: {
    opcaoModal(op) {
      this.feedbackModal = op
    },
    efetuarLogout() {
      this.$store.commit("USUARIO_DESLOGADO");
      localStorage.removeItem("usuario");
      localStorage.removeItem("token");
      this.$router.push({ name: "home" });
    },
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
