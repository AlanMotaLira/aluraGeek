<template>
  <section class="page pageHome">
    <section>
      <HomeDestaque />
    </section>
    <section
      v-for="grupo in categoriasAtivas()"
      :key="grupo._id"
    >
      <SecaoPage
        :titulo="grupo.categoria"
        modelo="modelo1"
      >
        <template #cards>
          <CardPadrao
            v-for="produto in grupo.produtos"
            :key="produto._id"
            :nome="produto.nome"
            :preco="produto.preco"
            :image="produto.imagem"
            :idproduto="produto._id"
            :idcategoria="grupo._id"
          />
        </template>
      </SecaoPage>
    </section>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import HomeDestaque from "../components/homeDestaque.vue";
import CardPadrao from "../components/cardPadrao.vue";
import SecaoPage from "../components/secaoPage.vue";

export default {
  name: "HomePage",
  components: {
    CardPadrao,
    HomeDestaque,
    SecaoPage,
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
