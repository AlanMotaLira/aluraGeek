<template>
  <section>
    <span>
      Acesso Negado!
    </span>
    <router-link
      :to="{ name: 'Home' }">
      Efetue o cadastro clicando aqui!
    </router-link>
  </section>
</template>
<style scoped>
span,
a {
  color: var(--texto-destaque);
  font-weight: 700;
  font-size: 2rem;
}
a {
  color: var(--botao-padrao-80);
}
section {
  background: var(--pagina-claro);
  display: flex;
  text-align: center;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
