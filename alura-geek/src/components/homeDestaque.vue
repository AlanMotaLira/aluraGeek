<template>
  <div class="container">
    <h2
      class="destaque__titulo"
    >
      Dezembro Promocional
    </h2>
    <p class="destaque__subtitulo">
      Produtos selecionados com 33% de desconto
    </p>
    <Botao-modelo
      modelo="modelo-1"
      rotulo="Ver Consoles"
    />
  </div>
</template>
<script>
import botaoModelo from "./botaoModelo.vue";
export default {
  components: {
    "Botao-modelo": botaoModelo,
  },
};
</script>
<style scoped>
.container{
    display: flex;
    color:var(--texto-claro);
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 41.15%, rgba(0, 0, 0, 0.8) 100%), url("../assets/img/mobile/Hero.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 192px;;
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
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 41.15%, rgba(0, 0, 0, 0.8) 100%), url("../assets/img/desktop/Hero.jpg");
        height: 352px;
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
        background-image: url("../assets/img/desktop/Hero.jpg");
        height: 352px;
    }
}
</style>
