<template>
  <section class="login">
    <form action="">
      <h3 class="login__titulo">Iniciar Sessão</h3>
      <Input-modelo
        chave="login-email"
        rotulo="Email"
        tipo="Email"
      />
      <Input-modelo
        chave="login-senha"
        rotulo="Senha"
        tipo="password"
      />
      <Botao-modelo
        modelo="modelo-3"
        rotulo="Entrar"
      />
    </form>
    <aside class="login__opcoes">
      <a>Criar acesso</a>
      <a>Esqueceu a senha?</a>
    </aside>
  </section>
</template>
<script>
import inputModelo from "./inputModelo.vue";
import botaoModelo from "./botaoModelo.vue";

export default {
  components: {
    "Input-modelo": inputModelo,
    "Botao-modelo": botaoModelo,
  },
};
</script>
<style scoped>
.login{
  display: flex;
  text-align:center;
  flex-direction: column;
  font-family: "Raleway";
  justify-content: center;
  padding: 6rem 3rem;
  vertical-align: middle;
}
.login__titulo{
  color:var(--texto-padrao);
  font-size: 1,125rem;
  font-weight: 700;
  margin-bottom: 2rem;
}
.login__opcoes{
  display: flex;
  color:var(--texto-desfocado);
  justify-content: space-between;
  padding: 1rem;
  font-size: 0.7rem;
  font-weight: 700;
}
.login__opcoes a{
  cursor: pointer;
}
.login__opcoes a:hover{
  color:var(--texto-destaque);
}

@media screen and (min-width: 768px) {
  .login{
    max-width: 600px;
  }
}
</style>
