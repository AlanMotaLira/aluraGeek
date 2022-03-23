<template>
  <section class="page rodape">
    <div class="container">
      <article class="rodape__links">
        <LogoAluraGeek alt="logotipo da AluraGeek" />
        <nav class="rodape__link--lista">
          <a
            v-for="lista in listagens"
            :key="lista.titulo"
            :href="lista.href"
            class=""
          >
            {{ lista.titulo }}
          </a>
        </nav>
      </article>
      <article class="rodape__contato">
        <h4 class="rodape__contato--titulo">
          Fale Conosco
        </h4>
        <form
          action=""
          class="rodape__contato--form"
        >
          <InputModelo
            chave="input-nome"
            rotulo="Nome"
            tipo="text"
          />
          <textarea
            rows="3"
            placeholder="Escreva sua mensagem"
          />
          <BotaoModelo
            modelo="modelo-1"
            rotulo="Enviar mensagem"
          />
        </form>
      </article>
    </div>    
  </section>
</template>
<script>
import LogoAluraGeek from "../assets/svg/logoAluraGeek.vue";
import InputModelo from "../components/inputModelo.vue";
import BotaoModelo from "../components/botaoModelo.vue";
export default {
  components: {
    BotaoModelo,
    InputModelo,
    LogoAluraGeek,
  },
  data() {
    return {
      listagens: [
        { titulo: "Quem somos nós", href: "#" },
        { titulo: "Politica de privacidade", href: "#" },
        { titulo: "Programa fidelidade", href: "#" },
        { titulo: "Nossa lojas", href: "#" },
        { titulo: "Quero ser franqueado", href: "#" },
        { titulo: "Anucie aqui", href: "#" },
      ],
    };
  },
};
</script>
<style scoped>
.rodape,
.rodape__links,
.rodape__contato,
.rodape__contato--form,
.rodape__link--lista {
  display: flex;
  flex-direction: column;
}
.rodape {
  align-items: center;
  font-size: 1rem;
}
.container {
  display: grid;
  padding: 3rem 2rem;
  width: 100%;
  grid-template-columns: repeat(1, minmax(50%, 1fr));
}
.rodape__links {
  align-items: center;
  text-align: center;
}
.rodape__link a {
  cursor: pointer;
}
.rodape__link--lista {
  font-weight: 500;
  margin: 1rem 0;
  line-height: 2.3rem;
}
.rodape__contato--form {
  width: 100%;
}
.rodape__contato--form textarea {
  background: var(--pagina-padrao);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  margin-bottom: 1rem;
}
.rodape__contato--titulo {
  font-weight: 700;
}

@media screen and (min-width: 768px) {
  .container {
    justify-items: start;
    grid-template-columns: repeat(2, minmax(auto, 1fr));
  }
  .rodape__contato--form {
    width: 40vw;
  }
  .rodape__links,
  .rodape__contato {
    text-align: left;
  }
}

@media screen and (min-width: 1136px) {
  .rodape__links {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    width: 30vw;
  }
  .rodape__link--lista {
    margin: 0;
  }
}
</style>
