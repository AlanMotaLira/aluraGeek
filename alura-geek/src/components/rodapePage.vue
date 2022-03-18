<template>
  <footer class="rodape">
    <div class="container">
      <section class="rodape__links">
        <Logo-alura-geek alt="logotipo da AluraGeek" />
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
      </section>
      <section class="rodape__contato">
        <h4 class="rodape__contato--titulo">
          Fale Conosco
        </h4>
        <form
          action=""
          class="rodape__contato--form"
        >
          <Input-modelo
            chave="input-nome"
            rotulo="Nome"
            tipo="text"
          />
          <textarea
            rows="3"
            placeholder="Escreva sua mensagem"
          />
          <Botao-modelo
            modelo="modelo-1"
            rotulo="Enviar mensagem"
          />
        </form>
      </section>
    </div>
    <section class="rodape_fim">
      <h4>Desenvolvido por Alan Lira</h4>
      <h3>2022</h3>
    </section>
  </footer>
</template>
<script>
import logoAluraGeek from "../assets/svg/logoAluraGeek.vue";
import inputModelo from "../components/inputModelo.vue";
import botaoModelo from "../components/botaoModelo.vue";
export default {
  components: {
    "Botao-modelo": botaoModelo,
    "Input-modelo": inputModelo,
    "Logo-alura-geek": logoAluraGeek,
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
  color: var(--texto-padrao);
  font-size: 1rem;
  left: -16px;
  position: relative;
  width: 100vw;
}
.container {
  display: grid;
  background: var(--rodape-padrao);
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
  background: #ffffff;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  margin-bottom: 1rem;
}
.rodape__contato--titulo {
  font-weight: 700;
}
.rodape_fim{
    font-size: 1rem;
    height: 6.5rem;
    line-height: 2.3rem;
    text-align: center;
    padding: 2.25rem 0;
}

@media screen and (min-width: 768px) {
  .container {
    justify-items: start;
    grid-template-columns: repeat(2, minmax(auto, 1fr));
  }
  .rodape__contato--form {
    width: 40vw;
  }
  .rodape {
    left: -2rem;
  }
  .rodape__links,
  .rodape__contato {
    text-align: left;
  }
}

@media screen and (min-width: 1136px) {

  .rodape {
    margin: 1rem 0;
    left:-100px;
    width: 99vw;
  }
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
