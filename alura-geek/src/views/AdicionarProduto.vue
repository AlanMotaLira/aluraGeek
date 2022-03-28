<template>
  <div>
    <header class="page">
      <CabecalhoPrincipal />
    </header>
    <main>
      <form class="page adicionar">
        <router-link :to="{ name: 'perfil' }" class="adicionar__voltar">
          <i class="fa-regular fa-circle-left" />
          Voltar
        </router-link>
        <h2 class="adicionar__titulo">Adicionar novo produto</h2>
        <div class="adicionar__imagens">
          <label for="carregarImagem" class="adicionar__imagens--carregada"
            ><i class="fa-regular fa-images"></i>
            <p>Clique para procurar no seu computador ou arraste a imagem</p></label
          >
          <input type="file" id="carregarImagem" name="carregarImagem" />
        </div>
        <div class="adicionar__dados">
          <InputModelo
            v-for="grupo in inputs"
            :key="grupo.chave"
            :chave="grupo.chave"
            :rotulo="grupo.rotulo"
            :tipo="grupo.tipo"
            @registro="novoProduto[grupo.chave.toLowerCase()] = $event"
          />
          <BotaoModelo modelo="modelo-4" rotulo="Adicionar produto" />
        </div>
      </form>
    </main>
  </div>
</template>

<script>
import CabecalhoPrincipal from "../components/cabecalhoPrincipal.vue";
import BotaoModelo from "../components/botaoModelo.vue";
import InputModelo from "../components/inputModelo.vue";
export default {
  name: "PerfilUsuario",
  components: {
    BotaoModelo,
    CabecalhoPrincipal,
    InputModelo,
  },
  data() {
    return {
      novoProduto: {},
      inputs: [
        { chave: "nome", rotulo: "Nome do produto", tipo: "string" },
        { chave: "preco", rotulo: "Preço do produto", tipo: "number" },
        { chave: "descricao", rotulo: "Descrição do produto", tipo: "text" },
      ],
    };
  },
};
</script>

<style scoped>
input[type="file"] {
  display: none;
}
.adicionar {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}
.adicionar__imagens {
  display: flex;
  justify-content: space-around;
}
.adicionar__imagens--carregada {
  display: flex;
  background-color: var(--pagina-padrao);
  border: 2px dashed var(--texto-desfocado);
  color: var(--texto-desfocado);
  cursor: pointer;
  display: block;
  flex-direction: column;
  font-size: 1rem;
  font-weight: 400;
  height: 19.5rem;
  justify-content: center;
  margin: 0 1rem;
  padding: 6rem 2rem;
  text-align: center;
  width: 100%;
}
.adicionar__imagens--carregada svg {
  height: 3rem;
}
.adicionar__titulo {
  align-self: flex-start;
  font-weight: 700;
  font-size: 1.375rem;
  line-height: 1.625rem;
  margin: 1rem;
}
.adicionar__voltar {
  align-self: flex-start;
  color: var(--texto-destaque);
  font-size: 1rem;
  font-weight: 700;
}
@media screen and (min-width: 768px) {
  .adicionar {
    margin: 0 1rem;
  }
  .adicionar__imagens {
    align-self: flex-start;
  }
  .adicionar__imagens--carregada {
    height: 15.875rem;
  }
}

@media screen and (min-width: 1136px) {
  .adicionar {
    align-items: center;
    padding: 2rem 18.75rem;
  }
  .adicionar__imagens {
    align-self: center;
  }
  .adicionar__dados {
    width: 100%;
  }
  .adicionar__titulo {
    font-size: 2rem;
    line-height: 2.375rem;
  }
  .adicionar__imagens--carregada {
    height: 17.625rem;
  }
}
</style>
