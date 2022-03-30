<template>
  <section class="card">
    <figure class="card__figura">
      <img
        class="card__figura--imagem"
        :src="require(`../../static/card/${image}.jpg`)"
        :alt="nome"
      />
      <div v-if="editavel" class="card__figura--opcao">
        <button aria-label="editar produto">
          <i class="fa-solid fa-pencil" />
        </button>
        <button aria-label="remover produto" @click="removerProduto(dados)">
          <i class="fa-solid fa-trash-can" />
        </button>
      </div>
    </figure>
    <article class="card__item">
      <h3 class="card__item--titulo">
        {{ nome }}
      </h3>

      <p class="card__item--preco">R$ {{ preco.toFixed(2) }}</p>
      <router-link
        :to="{ name: 'sobre-produto' }"
        v-if="tipo === 'tipo1'"
        class="card__item--link"
        @click="produtoSelecionado({ idCategoria: idcategoria, idProduto: idproduto })"
      >
        Ver produto
      </router-link>
      <p v-if="tipo === 'tipo2'" class="card__item--titulo">
        {{ idcategoria }}
      </p>
    </article>
  </section>
</template>
<script>
export default {
  props: {
    editavel: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
      required: true,
    },
    nome: {
      type: String,
      required: true,
    },
    tipo: {
      type: String,
      required: true,
    },
    preco: {
      type: Number,
      required: true,
    },
    idproduto: {
      type: String,
      required: true,
    },
    idcategoria: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      dados: {
        imagem: this.image,
        nome: this.nome,
        tipo: this.tipo,
        preco: this.preco,
        idCategoria: this.idcategoria,
        idProduto: this.idproduto,
      },
    };
  },
  methods: {
    produtoSelecionado(dados) {
      return this.$store.dispatch("produtoSelecionado", dados);
    },
    removerProduto(dados) {
      this.$emit("removerProduto", dados);
    },
  },
};
</script>
<style scoped>
.card {
  display: flex;
  border-radius: 1rem;
  box-shadow: var(--botao-padrao-20) 0px 7px 29px 0px;
  flex-direction: column;
  height: 249px;
  justify-content: space-evenly;
  overflow: hidden;
  width: 156px;
}
.card__figura {
  position: relative;
}
.card__figura--imagem {
  height: 174px;
  width: 100%;
}
.card__figura--opcao {
  color: var(--botao-padrao-20);
  font-size: 1.125rem;
  position: absolute;
  right: 1rem;
  top: 1rem;
}
.card__figura--opcao button {
  cursor: pointer;
  margin: 0.5rem;
}
.card__figura--opcao button:hover {
  color: var(--botao-padrao);
}
.card__item {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  line-height: 1.4rem;
  padding: 0.5rem;
}
.card__item--link,
.card__item--preco {
  font-weight: 700;
  font-size: 1rem;
}
.card__item--link {
  color: var(--texto-destaque);
}
.card__item--titulo {
  font-weight: 500;
  font-size: 0.75rem;
}

@media screen and (min-width: 768px) {
  .card {
    width: 164px;
  }
}

@media screen and (min-width: 1136px) {
  .card {
    width: 176px;
  }
}
</style>
