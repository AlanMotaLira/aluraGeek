<template>
  <div>
    <Cabecalho-principal />
  </div>
</template>

<script>
import cabecalhoPrincipal from '../components/cabecalhoPrincipal.vue';

export default {
  name: 'HomePage',
  components: {
    'Cabecalho-principal': cabecalhoPrincipal,
  },
};
</script>
