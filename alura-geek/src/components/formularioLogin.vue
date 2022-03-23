<template>
  <section class="login">
    <h3 class="login__titulo">
      {{ titulos[selecionaveis.findIndex(i=> i === selecionado)] }}
    </h3>
    <form action="">
      <InputModelo
        v-for="grupo in grupoInputs()"
        :key="grupo.chave"
        :chave="grupo.chave"
        :rotulo="grupo.rotulo"
        :tipo="grupo.tipo"
      />
      <BotaoModelo
        modelo="modelo-3"
        :rotulo="rotuloBotao[selecionaveis.findIndex(i=> i === selecionado)]"
      />
    </form>

    <nav class="login__opcoes">
      <a
        v-for="selecionavel in selecionaveis"
        v-show="selecionavel != selecionado"
        :key="selecionavel"
        @click="selecionado = selecionavel"
      >
        {{ selecionavel }}
      </a>
    </nav>
  </section>
</template>
<script>
import InputModelo from "./inputModelo.vue";
import BotaoModelo from "./botaoModelo.vue";

export default {
  components: {
    InputModelo,
    BotaoModelo,
  },
  data() {
    return {
      selecionado: "Login",
      selecionaveis: ["Login", "Criar acesso", "Esqueceu a senha?"],
      titulos: [
        "Iniciar Sessão",
        "Criar Novo Login",
        "Informe o seu email para a recuperação da senha",
      ],
      rotuloBotao:["Entrar","Enviar","Verificar"],
      inputs: [
        { chave: "nome", rotulo: "Nome", tipo: "string" },
        { chave: "email", rotulo: "Email", tipo: "email" },
        { chave: "senha", rotulo: "Senha", tipo: "password" },
        { chave: "conf-senha", rotulo: "Confirma a Senha", tipo: "password" },
      ],
    };
  },
  methods: {
    grupoInputs() {
      if (this.selecionado === "Login") {
        return this.inputs.slice(1, 3);
      }
      if (this.selecionado === "Esqueceu a senha?") {
        return this.inputs.slice(1, 2);
      } else {
        return this.inputs;
      }
    },
  },
};
</script>
<style>
.login {
  display: flex;
  font-family: "Raleway";
  flex-direction: column;
  justify-content: center;
  padding: 3.5rem 3rem;
  text-align: center;
  vertical-align: middle;
}
.login__opcoes {
  display: flex;
  color: var(--texto-desfocado);
  font-size: 0.7rem;
  font-weight: 700;
  justify-content: space-between;
  padding: 1rem;
}
.login__opcoes a {
  cursor: pointer;
}
.login__opcoes a:hover {
  color: var(--texto-destaque);
}
.login__titulo {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 2rem;
}
</style>
