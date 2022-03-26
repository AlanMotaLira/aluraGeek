<template>
  <section class="card">
    <figure>
      <img
        class="card__imagem"
        :src="require(`../../static/card/${image}.jpg`)"
        :alt="nome"
      >
    </figure>
    <article class="card__item">
      <h3 class="card__item--titulo">
        {{ nome }}
      </h3>

      <p
        class="card__item--preco"
      >
        R$ {{ preco.toFixed(2) }}
      </p>
      <router-link
        :to="{ name: 'sobre-produto' }"
        class="card__item--link"
        @click="produtoSelecionado({ idCategoria: idcategoria, idProduto: idproduto })"
      >
        Ver produto
      </router-link>
    </article>
  </section>
</template>
<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    nome: {
      type: String,
      required: true,
    },
    preco: {
      type: Number,
      required: true,
    },
    "idproduto": {
      type: String,
      required: true,
    },
    "idcategoria": {
      type: String
    },
  },
  methods: {
    produtoSelecionado(dados) {
      return this.$store.dispatch("produtoSelecionado", dados);
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
.card__imagem {
  height: 174px;
  width: 100%;
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
