<template>
  <div>
    <Cabecalho-principal />
    <main>
      <article>
        <Home-destaque />
      </article>
      <Secao-page titulo="Star Wars">
        <template #cards>
          <Card-padrao />
        </template>
      </Secao-page>
    </main>
  </div>
</template>

<script>
import cabecalhoPrincipal from "../components/cabecalhoPrincipal.vue";
import homeDestaque from "../components/homeDestaque.vue";
import cardPadrao from "../components/cardPadrao.vue";
import secaoPage from "../components/secaoPage.vue";

export default {
  name: "HomePage",
  components: {
    "Card-padrao": cardPadrao,
    "Cabecalho-principal": cabecalhoPrincipal,
    "Home-destaque": homeDestaque,
    "Secao-page": secaoPage,
  },
};
</script>
