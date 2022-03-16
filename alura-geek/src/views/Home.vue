<template>
  <div>
    <Cabecalho-principal />
    <main>
      <Home-destaque />
      <div class="teste">
        <Card-padrao />
      </div>
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
<style scoped>
.teste{
  position: relative;
  top:100px;
  left:-16px;
}

</style>
