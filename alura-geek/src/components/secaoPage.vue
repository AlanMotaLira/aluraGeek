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
    <slot name="cards" />
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
  margin-bottom:1rem;
  justify-content: space-between;
}
.secao__link {
  color: var(--texto-destaque);
  font-size: 1rem;;
}
.secao__titulo {
  color: var(--texto-padrao);
  font-size: 2rem;
}
</style>
