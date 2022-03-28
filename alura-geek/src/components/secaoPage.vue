<template>
  <section>
    <div class="container">
      <h3 class="secao__titulo">
        {{ titulo }}
      </h3>
      <a
        v-if="modelo==='modelo1'"
        href="#"
        class="secao__link"
      >
        Ver tudo
        <i class="fa fa-caret-right" />
      </a>
      <div
        v-if="modelo==='modelo2'"
        class="sort"
      >
        <BotaoModelo
          v-if="adicionar"
          modelo="modelo-1"
          rotulo="Adicionar produto"
          class="sort__adicionar"
          @click="adicionarProduto()"
        />
        <button
          type="button"
          class="sort__colapsar"
          @click="ativarColapso()"
        >
          <i class="fa-solid fa-filter" />
        </button>
        <ul
          v-show="colapsar"
          class="sort_conteudo"
        >
          <li><i class="fa fa-arrow-up-a-z" /> Ordem crescente</li>
          <li><i class="fa fa-arrow-down-z-a" /> Ordem decrescente</li>
          <li><i class="fa fa-sort-up" /> Maior valor ao menor</li>
          <li><i class="fa fa-sort-down" /> Menor valor ao maior</li>
        </ul>
      </div>
    </div>
    <div
      v-if="modelo==='modelo1'"
      class="secao__card--row"
    >
      <slot name="cards" />
    </div>
    <div
      v-if="modelo==='modelo2'"
      class="secao__card--grid"
    >
      <slot name="cards" />
    </div>
  </section>
</template>
<script>
import BotaoModelo from "./botaoModelo.vue"
export default {
  props: {
    adicionar: {
      type: Boolean,
      default: false,
    },
    titulo: {
      type: String,
      required: true,
    },
    modelo: {
      type: String,
      required: true,
    },
  },
  components: {
    BotaoModelo,
  },
  data(){
    return{
      colapsar:false
    }
  },
  methods: {
  ativarColapso(){
    this.colapsar = !this.colapsar
    },
  adicionarProduto(){
    this.$router.push({ name: "novo-produto" });
  }
  },
};
</script>
<style scoped>
.container {
  display: flex;
  font-weight: 700;
  padding: 2rem 0 1rem 0;
  justify-content: space-between;
}
.secao__card--grid,
.secao__card--row{
  display: grid;
  gap: 0.5rem;
  justify-content: center;
  grid-template-columns: repeat(2, minmax(156px, 1fr))
}
.secao__card--grid{
  transition-duration: 0.7s;
  grid-auto-rows:260px;
  grid-template-rows: repeat(2, 260px);
}
.secao__card--row {
  grid-auto-rows: 0;
  grid-template-rows: repeat(2, 260px);
  overflow-y: hidden;
}
.secao__link {
  color: var(--texto-destaque);
  font-size: 1rem;
}
.secao__titulo {
  font-size: 2rem;
}
.sort,
.sort_conteudo{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.sort__adicionar{
  align-self:flex-end;
}
.sort__colapsar {
  align-self:flex-end;
  background-color: transparent;
  color: var(--botao-padrao-80);
  cursor: pointer;
  padding: 1rem;
  width: 2rem;
  border: none;
  text-align: center;
  outline: none;
  font-size: 1rem;
}
.sort__colapsar:hover {
  color: var(--botao-padrao);
}
.sort_conteudo {
  padding: 0 1rem;
  font-size: 0.85rem;
  text-align: left;
  transition-duration: 0.5s;
  animation: moverAbaixo 1s ease;
}
.sort_conteudo li{
  color:var(--botao-padrao);
  cursor: pointer;
  margin: 0.5rem;
}
.sort_conteudo li:hover{
  color:var(--botao-padrao-80)
}
@media screen and (min-width: 768px) {

  .secao__card--grid,
  .secao__card--row{
    grid-template-columns: repeat(4, minmax(164px, 1fr))
  }
  .secao__card--row {
    grid-template-rows: 260px; ;
  }
}

@media screen and (min-width: 1136px) {
  .secao__card--grid,
  .secao__card--row{
    grid-template-columns: repeat(6, minmax(176px, 1fr));
  }
  .secao__card--row {
    grid-template-columns: repeat(6, minmax(176px, 1fr));
    overflow: initial;
  }
}
</style>
