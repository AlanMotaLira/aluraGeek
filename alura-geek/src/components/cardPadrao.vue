<template>
  <article class="card">
    <img
      class="card__imagem"
      src="../assets/img/card/unsplash_6FDXGY9J6y4.jpg"
      alt="#"
    >
    <section class="card__item">
      <h3 class="card__item--titulo">
        Produto XYZ
      </h3>
      <p class="card__item--preco">
        R$ 60,00
      </p>
      <a
        href="#"
        class="card__item--link"
      >
        Ver produto
      </a>
    </section>
  </article>
</template>
<script>
export default {
  setup() {},
};
</script>
<style scoped>
.card {
  display: flex;
  border-radius: 1rem;
  box-shadow: 0px 0px 22px -8px var(--texto-destaque);
  color: var(--texto-padrao);
  flex-direction: column;
  height: 270px;
  justify-content: space-evenly;
  margin: 0 0.5rem;
  overflow: hidden;
  width: 156px;
}
.card__imagem {
  height: 174px;
  width: 100%;
}
.card__item {
  display: grid;
  gap: 8px;
  grid-template-columns: 1fr;
  padding: 16px;
}
.card__item--link,
.card__item--preco {
  font-weight: 700;
  font-size: 1rem;
}
.card__item--link {
  color: var(--texto-destaque);
}
.card__item--titulo {
  color: var(--texto-padrao);
  font-weight: 500;
  font-size: 14px;
}

@media screen and (min-width: 768px) {
  .card {
    width: 164px;
  }
}

@media screen and (min-width: 1136px) {
  .card {
    width: 176px;
  }
}
</style>
