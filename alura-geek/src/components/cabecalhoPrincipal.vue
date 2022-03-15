<template>
  <header class="cabecalho">
    <div class="container">
      <Logo-alura-geek alt="logotipo da HZC" />
      <Input-pesquisa placeholder="O que deseja encontrar?" />
    </div>
    <Botao-modelo
      modelo="modelo-2"
      rotulo="Login"
    />
    <Input-pesquisa placeholder="O que deseja encontrar?" />
    <button
      class="cabecalho__botao-pesquisa"
      aria-label="pesquisa"
    >
      <i class="fas fa-magnifying-glass" />
    </button>
  </header>
</template>
<script>
import botaoModelo from './botaoModelo.vue';
import inputPesquisa from './inputPesquisa.vue'
import logoAluraGeek from '../assets/svg/logoAluraGeek.vue';

export default {
  components: {
    'Botao-modelo': botaoModelo,
    'Input-pesquisa':inputPesquisa,
    'Logo-alura-geek': logoAluraGeek,
  },
};
</script>
<style scoped>
.cabecalho {
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 72px;
  justify-content: space-between;
  padding: 16px;
}
.cabecalho__botao-pesquisa{
  color:var(--texto-padrao);
  cursor: pointer;
  margin: 0 1rem;

}
.container{
  display: flex;
  vertical-align: middle;
}

@media screen and (min-width: 768px) {
  .cabecalho{
    padding: 16px 32px;
  }
  .cabecalho__botao-pesquisa{
    display: none;
  }
}

@media screen and (min-width: 1136px) {
  .cabecalho{
    height: 115px;
    margin: 0px 64px;
    padding: 0px;
  }
}
</style>
