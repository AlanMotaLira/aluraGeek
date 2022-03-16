<template>
  <div>
    <Cabecalho-principal />
    <main>
      <Home-destaque />
      <Card-padrao />
    </main>
  </div>
</template>

<script>
import cabecalhoPrincipal from "../components/cabecalhoPrincipal.vue";
import homeDestaque from "../components/homeDestaque.vue";
import cardPadrao from "../components/cardPadrao.vue"

export default {
  name: "HomePage",
  components: {
    "Card-padrao": cardPadrao,
    "Cabecalho-principal": cabecalhoPrincipal,
    "Home-destaque":homeDestaque,
  },
};
</script>
