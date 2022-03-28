<template>
  <div>
    <header class="page">
      <CabecalhoPrincipal>
        <template #pesquisa>
          <InputPesquisa
            placeholder="O que deseja encontrar?"
            @pesquisa="pesquisa = $event"
        />
        </template>
      </CabecalhoPrincipal>
    </header>
    <main>
      <section class="page">
        <SecaoPage
          adicionar
          modelo="modelo2"
          titulo="Todos os produtos"
        >
          <template #cards>
            <CardPadrao
              v-for="produto in ordernarProdutos"
              :key="produto._id"
              :nome="produto.nome"
              tipo="tipo2"
              :preco="produto.preco"
              :image="produto.imagem"
              :idproduto="produto._id"
            />
          </template>
        </SecaoPage>
      </section>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CabecalhoPrincipal from "../components/cabecalhoPrincipal.vue";
import CardPadrao from "../components/cardPadrao.vue";
import InputPesquisa from "../components/inputPesquisa.vue"
import SecaoPage from "../components/secaoPage.vue";

export default {
  name: "PerfilUsuario",
  components: {
    CabecalhoPrincipal,
    CardPadrao,
    InputPesquisa,
    SecaoPage,
  },
  data(){
    return{
      pesquisa:"",
    }
  },
  computed: {
    ...mapGetters(["ProdutosListados"]),
    ordernarProdutos() {
      if(this.pesquisa){
        let pesq = new RegExp(this.pesquisa.trim(), "i");
          return this.ProdutosListados.filter(
            item =>
              pesq.test(item.nome) ||
              pesq.test(item.preco)
          );
      }else{
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
