<template>
  <SecaoPage
    titulo="Pesquisa"
    modelo="modelo2"
    class="page"
  >
    <template #cards>
      <CardPadrao
        v-for="produto in pesquisaProdutos"
        :key="produto._id"
        :nome="produto.nome"
        tipo="tipo1"
        :preco="produto.preco"
        :image="produto.imagem"
        :idproduto="produto._id"
      />
    </template>
  </SecaoPage>
</template>

<script>
import { mapGetters } from "vuex";
import CardPadrao from "../components/cardPadrao.vue"
import SecaoPage from "../components/secaoPage.vue";

export default {
  components: {
    CardPadrao,
    SecaoPage,
  },
  props: {
    pesquisado: {
      type: String,
      default: "",
    }
  },
  data() {
    return {
      pesquisa: this.pesquisado,
    };
  },
  computed: {
    ...mapGetters(["ProdutosListados"]),
    pesquisaProdutos() {
      if (this.pesquisado) {
        let pesq = new RegExp(this.pesquisado.trim(), "i");
        return this.ProdutosListados.filter(
          (item) => 
            pesq.test(item.nome) ||
            pesq.test(item.preco)
        );
      } else {
        return this.ProdutosListados;
      }
    },
  },
  mounted() {
    this.$store.dispatch("todosProdutos");
  },
};
</script>

<style scoped></style>
