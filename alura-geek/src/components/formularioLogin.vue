<template>
  <section class="login">
    <h3 class="login__titulo">Iniciar Sessão</h3>
    <form action="">
      <InputModelo
        v-for="login in logins"
        :key="login.chave"
        :chave="login.chave"
        :rotulo="login.rotulo"
        :tipo="login.tipo"
      />
      <BotaoModelo modelo="modelo-3" rotulo="Entrar" />
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
      selecionado: "Esqueceu a senha?",
      selecionaveis: ["Login", "Criar acesso", "Esqueceu a senha?"],
      logins: [
        { chave: "nome", rotulo: "Nome", tipo: "string" },
        { chave: "email", rotulo: "Email", tipo: "email" },
        { chave: "senha", rotulo: "Senha", tipo: "password" },
        { chave: "conf-senha", rotulo: "Confirma a Senha", tipo: "password" },
      ],
    };
  },
};
</script>
<style>
.login {
  display: flex;
  font-family: "Raleway";
  flex-direction: column;
  justify-content: center;
  padding: 6rem 3rem;
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
  color: var(--texto-padrao);
  font-size: 1, 125rem;
  font-weight: 700;
  margin-bottom: 2rem;
}
</style>
