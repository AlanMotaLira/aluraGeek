<template>
  <section>
    <div class="container">
      <h3 class="secao__titulo">
        {{ titulo }}
      </h3>
      <a
        href="#"
        class="secao__link"
      >
        Ver tudo
        <i class="fa fa-caret-right" />
      </a>
    </div>
    <div class="secao__card">
      <slot name="cards" />
    </div>
  </section>
</template>
<script>
export default {
  props: {
    titulo: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
.container {
  display: flex;
  font-weight: 700;
  margin:4rem 0 1rem 0;
  justify-content: space-between;
}
.secao__card{
  display: grid;
  gap: 0.5rem;;
  justify-content: center;
  grid-auto-rows:0;
  grid-template-rows:repeat(2,260px);
  grid-template-columns: repeat(2, minmax(156px, 1fr));
  overflow-y:hidden ;
}
.secao__link {
  color: var(--texto-destaque);
  font-size: 1rem;;
}
.secao__titulo {
  color: var(--texto-padrao);
  font-size: 2rem;
}

@media screen and (min-width: 768px) {
  .secao__card{
    grid-template-rows:260px;
    grid-template-columns: repeat(4, minmax(164px, 1fr));
  }
}

@media screen and (min-width: 1136px) {
  .secao__card{
    grid-template-columns: repeat(6, minmax(176px, 1fr));
    overflow: initial;
  }

}
</style>
