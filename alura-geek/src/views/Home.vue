<template>
  <div>
    <Cabecalho-principal />
    <main>
      <Home-destaque />
    </main>
  </div>
</template>

<script>
import cabecalhoPrincipal from "../components/cabecalhoPrincipal.vue";
import homeDestaque from "../components/homeDestaque.vue";

export default {
  name: "HomePage",
  components: {
    "Cabecalho-principal": cabecalhoPrincipal,
    "Home-destaque":homeDestaque,
  },
};
</script>
