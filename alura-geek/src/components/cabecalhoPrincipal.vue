<template>
  <div>
    <Botao-modelo
      modelo="modelo-2"
      rotulo="Login"
    />
  </div>
</template>
<script>
import botaoModelo from './botaoModelo.vue';

export default {
  components: {
    'Botao-modelo': botaoModelo,
  },
};
</script>
