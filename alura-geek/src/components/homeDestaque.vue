<template>
  <article class="container">
    <h2
      class="destaque__titulo"
    >
      Dezembro Promocional
    </h2>
    <p class="destaque__subtitulo">
      Produtos selecionados com 33% de desconto
    </p>
    <BotaoModelo
      modelo="modelo-1"
      rotulo="Ver Consoles"
    />
  </article>
</template>
<script>
import BotaoModelo from "./botaoModelo.vue";
export default {
  components: {
    BotaoModelo,
  },
};
</script>
<style scoped>
.container{
    display: flex;
    line-height: 1.6;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 41.15%, rgba(0, 0, 0, 0.8) 100%), url("../../static/img/banner.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color:var(--texto-claro);
    flex-direction: column;
    justify-content: flex-end;
    height: 192px;
    left: -1rem;
    position:relative;
    padding: 1rem;
    width:100vw;
}
.destaque__titulo{
    font-size: 1.375rem;
    font-weight: 700;
}
.destaque__subtitulo{
    font-size: 0.875rem;
    font-weight: 600;
}

@media screen and (min-width: 768px) {
    .container{
        height: 352px;
        padding: 1rem 2rem;
        left:-2rem;
    }
    .destaque__titulo{
        font-size: 3.25rem;
    }
    .destaque__subtitulo{
        font-size: 1.83rem;
        font-weight: 700;
    }
}

@media screen and (min-width: 1136px) {
    .container{
        height: 352px;
        padding: 32px 100px;
        left:-100px;
        width:99vw;

    }
}
</style>
