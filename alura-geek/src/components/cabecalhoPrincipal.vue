<template>
  <div>
    <section class="cabecalho">
      <div class="container">
        <h1 aria-label="aluraGeek">
          <LogoAluraGeek alt="logotipo da AluraGeek" />
        </h1>
        <div class="cabecalho__pesquisa-desktop">
          <slot name="pesquisa" />
        </div>
      </div>

      <BotaoModelo
        v-if="!atualizarCabecalho"
        modelo="modelo-2"
        rotulo="Login"
        @click="opcaoModal(true)"
      />
      <div v-if="atualizarCabecalho" class="cabecalho__usuario">
        <p>
          <i class="fa fa-user" />
          {{ perfilAtivo }}
        </p>
        <button @click="efetuarLogout()">
          sair
        </button>
      </div>
      <button
        class="cabecalho__botao-pesquisa"
        aria-label="pesquisa"
        @click="filtro = !filtro"
      >
        <i class="fas fa-magnifying-glass" />
      </button>
      <div v-show="filtro">
        <slot name="pesquisa" />
      </div>
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
import LogoAluraGeek from "../assets/svg/logoAluraGeek.vue";
import ModalPadrao from "./modalPadrao.vue";
import FormularioLogin from "./formularioLogin.vue";

export default {
  components: {
    BotaoModelo,
    LogoAluraGeek,
    ModalPadrao,
    FormularioLogin,
  },
  
  data() {
    return {
      perfilAtivo: !localStorage.getItem("usuario")
        ? false
        : localStorage.getItem("usuario").toUpperCase(),
      filtro: false,
      feedbackModal: false,
    };
  },
  computed: {
    atualizarCabecalho() {
      if (this.perfilAtivo) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    opcaoModal(op) {
      this.feedbackModal = op;
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
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  height: 72px;
  justify-content: space-around;
}
.cabecalho__botao-pesquisa {
  cursor: pointer;
  margin: 0 1rem;
}
.cabecalho__pesquisa-desktop {
  display: none;
}
.cabecalho__usuario{
  display: flex;
  background-color: var(--pagina-claro);
  border-radius: 1rem;
  padding: 0.5rem;
}
.cabecalho__usuario button{
  color:var(--botao-padrao);
  cursor: pointer;
  margin: 0 1rem;;
}
.cabecalho__usuario button:hover{
  color:var(--botao-padrao-80);
}
.container {
  display: flex;
  vertical-align: middle;
}

@media screen and (min-width: 768px) {
  .cabecalho {
    justify-content: space-between;
  }
  .cabecalho__botao-pesquisa {
    display: none;
  }
  .cabecalho__pesquisa-desktop {
    display: initial;
  }
}

@media screen and (min-width: 1136px) {
  .cabecalho {
    height: 115px;
  }
}
</style>
