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
      <section>
        <HomeDestaque />
      </section>
      <section v-for="grupo in categoriasAtivas()" v-show="!pesquisa" :key="grupo._id" class="page">
        <SecaoPage :titulo="grupo.categoria" modelo="modelo1">
          <template #cards>
            <CardPadrao
              v-for="produto in grupo.produtos"
              :key="produto._id"
              :nome="produto.nome"
              tipo="tipo1"
              :preco="produto.preco"
              :image="produto.imagem"
              :idproduto="produto._id"
              :idcategoria="grupo._id"
            />
          </template>
        </SecaoPage>
      </section>
      <section v-show="pesquisa">
        <PesquisaPage :pesquisado="pesquisa"/>
      </section>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CabecalhoPrincipal from "../components/cabecalhoPrincipal.vue";
import CardPadrao from "../components/cardPadrao.vue";
import HomeDestaque from "../components/homeDestaque.vue";
import InputPesquisa from "../components/inputPesquisa.vue";
import PesquisaPage from "../components/pesquisaPage.vue";
import SecaoPage from "../components/secaoPage.vue";

export default {
  name: "HomePage",
  components: {
    CabecalhoPrincipal,
    CardPadrao,
    InputPesquisa,
    HomeDestaque,
    PesquisaPage,
    SecaoPage,
  },
  data() {
    return {
      pesquisa: "",
    };
  },
  computed: {
    ...mapGetters(["Categorias"]),
  },
  mounted() {
    this.$store.dispatch("categorias");
  },
  methods: {
    categoriasAtivas() {
      const itemAtivo = [];

      this.Categorias.forEach((item) => {
        if (item.homePage) {
          itemAtivo.push(item);
        }
      });
      return itemAtivo;
    },
  },
};
</script>
