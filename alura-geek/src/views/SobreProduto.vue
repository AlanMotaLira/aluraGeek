<template>
  <section class="page">
    <section class="produto">
      <figure>
        <img
          class="produto__imagem"
          :src="require(`../../static/card/${produto[0].imagem}.jpg`)"
          :alt="produto[0].nome"
        />
      </figure>
      <article class="produto__dados">
        <h2
          class="produto__dados--titulo">
            {{ produto[0].nome }}
        </h2>
        <p
          class="produto__dados--preco">
            R$ {{ produto[0].preco.toFixed(2) }}
        </p>
        <p
          class="produto__dados--descricao">
            {{ produto[0].descricao }}
        </p>
      </article>
    </section>
    <router-link
      :to="{ name: 'home' }"
      class="produto__link"
    >
      Voltar a pagina incial
      <i class="fa fa-house-chimney" />
    </router-link>
    <SecaoPage titulo="Produtos similares">
      <template #cards>
        <CardPadrao
          v-for="produto in produtos"
          :key="produto._id"
          :nome="produto.nome"
          :preco="produto.preco"
          :image="produto.imagem"
          :idProduto="produto._id"
          :idCategoria="this.Selecionados.idCategoria"
        />
      </template>
    </SecaoPage>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import CardPadrao from "../components/cardPadrao.vue";
import SecaoPage from "../components/secaoPage.vue";

export default {
  data() {
    return {
      selecionados: this.Selecionados,
    };
  },

  components: {
    CardPadrao,
    SecaoPage,
  },
  computed: {
    ...mapGetters(["Selecionados", "Produtos"]),
    produtos() {
      return this.Produtos.filter((produto) => {
        if (produto._id !== this.Selecionados.idProduto) {
          return produto;
        }
      });
    },
    produto() {
      return this.Produtos.filter((produto) => {
        if (produto._id === this.Selecionados.idProduto) {
          return produto;
        }
      });
      
    },
  },
};
</script>

<style scoped>
.produto,
.produto__dados {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.produto__dados--titulo {
  align-self: stretch;
  font-size: 1.375rem;
  font-weight: 500;
  line-height: 1.625rem;
}
.produto__dados--preco {
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.1875rem;
}
.produto__dados--descricao {
  align-self: stretch;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1rem;
}
.produto__dados--titulo,
.produto__dados--preco,
.produto__dados--descricao {
  margin: 8px 0px;
}
.produto__imagem {
  position: relative;
  height: 250px;
  left: -1rem;
  object-fit:cover;
  top:-1rem;
  width: 100vw;
}
.produto__link {
  display: block;
  color: var(--texto-destaque);
  cursor: pointer;
  font-size: 1rem;
  margin:1rem;
  transition: 500ms all
}
.produto__link:hover{
  color: var(--botao-padrao-80);
}

@media screen and (min-width: 768px) {
  .produto {
    align-items: center;
    flex-direction: row;
    padding: 2rem;
  }
  .produto__imagem {
    height: 157px;
    left: 0;
    margin: 1rem;
    top:0;
    width: 254px;
  }
}

@media screen and (min-width: 1136px) {
  .produto__imagem {  
    height:403px;
    width: 560px;
  }
}
</style>