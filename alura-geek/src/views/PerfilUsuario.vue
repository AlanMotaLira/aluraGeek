<template>
  <div>
    <header class="page">
      <CabecalhoPrincipal>
        <template #pesquisa>
          <InputPesquisa placeholder="O que deseja encontrar?" @pesquisa="pesquisa = $event" />
        </template>
      </CabecalhoPrincipal>
    </header>
    <main>
      <section class="page">
        <SecaoPage adicionar modelo="modelo2" titulo="Todos os produtos">
          <template #cards>
            <CardPadrao
              editavel
              v-for="produto in ordernarProdutos"
              :key="produto._id"
              :nome="produto.nome"
              tipo="tipo2"
              :preco="produto.preco"
              :image="produto.imagem"
              :idproduto="produto._id"
              :idcategoria="produto.grupo"
              @removerProduto="validarRemocao($event)"
            />
          </template>
        </SecaoPage>
      </section>
    </main>
    <ModalPadrao :feedback="feedbackModal" @fecharModal="opcaoModal(false)">
      <template #conteudo>
        <section class="page">
          <h3 class="remover__titulo"><i class="fa-solid fa-triangle-exclamation"></i> Você deseja remover o produto?</h3>
                      <CardPadrao
              :key="validacaoRemocao.idProduto"
              :nome="validacaoRemocao.nome"
              tipo="tipo2"
              :preco="validacaoRemocao.preco"
              :image="validacaoRemocao.imagem"
              :idproduto="validacaoRemocao.idProduto"
              :idcategoria="validacaoRemocao.idCategoria"
            />
          <div>
            <BotaoModelo modelo="modelo-2" rotulo="sim" @click="removerProduto(validacaoRemocao)" class="remover__botao" />
            <BotaoModelo modelo="modelo-2" rotulo="nao" @click="opcaoModal(false)" class="remover__botao" />
          </div>
        </section>
      </template>
    </ModalPadrao>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BotaoModelo from "../components/botaoModelo.vue";
import CabecalhoPrincipal from "../components/cabecalhoPrincipal.vue";
import CardPadrao from "../components/cardPadrao.vue";
import InputPesquisa from "../components/inputPesquisa.vue";
import ModalPadrao from "../components/modalPadrao.vue";
import quickSort from "../assets/js/quickSort.js";
import SecaoPage from "../components/secaoPage.vue";

export default {
  name: "PerfilUsuario",
  components: {
    BotaoModelo,
    CabecalhoPrincipal,
    CardPadrao,
    InputPesquisa,
    ModalPadrao,
    SecaoPage,
  },
  data() {
    return {
      pesquisa: "",
      feedbackModal: false,
      validacaoRemocao: [],
    };
  },
  computed: {
    ...mapGetters(["ProdutosListados", "CategoriaCadastradas"]),
    ordernarProdutos() {
      if (this.pesquisa) {
        let pesq = new RegExp(this.pesquisa.trim(), "i");
        return this.ProdutosListados.filter(
          (item) => pesq.test(item.nome) || pesq.test(item.preco)
        );
      } else {
        return this.ProdutosListados;
      }
    },
  },
  mounted() {
    this.$store.dispatch("todosProdutos");
    this.$store.dispatch("categoriaCadastradas");
  },
  methods: {
    opcaoModal(op) {
      this.feedbackModal = op;
    },
    validarRemocao(dados) {
      this.validacaoRemocao = dados;
      this.feedbackModal = true;
    },
    removerProduto(dados) {
      this.feedbackModal = false;
      console.log(dados);
    },
  },
};
</script>

<style scoped>
.remover__botao{
  margin:1rem;

}
.remover__titulo {
  align-self: flex-start;
  font-weight: 700;
  font-size: 1.375rem;
  line-height: 1.625rem;
  margin: 1rem;
}
</style>
