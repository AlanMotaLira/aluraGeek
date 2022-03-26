<template>
  <section class="page">
    <SecaoPage
      titulo="Todos os produtos"
      modelo="modelo2"
    >
      <template #cards>
        <CardPadrao
          v-for="produto in ordernarProdutos"
          :key="produto._id"
          :nome="produto.nome"
          :preco="produto.preco"
          :image="produto.imagem"
          :idproduto="produto._id"
        />
      </template>
    </SecaoPage>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import CardPadrao from "../components/cardPadrao.vue"
import SecaoPage from "../components/secaoPage.vue";

export default {
  name: "PerfilUsuario",
  components: {
    CardPadrao,
    SecaoPage,
  },
  mounted() {
    this.$store.dispatch("todosProdutos");
  },
  computed: {
    ...mapGetters(["ProdutosListados"]),
    ordernarProdutos() {
      return this.ProdutosListados
    },
  },


};
</script>

<style scoped></style>
