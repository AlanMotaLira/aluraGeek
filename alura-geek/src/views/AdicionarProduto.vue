<template>
  <div>
    <header class="page">
      <CabecalhoPrincipal />
    </header>
    <main>
      <form @submit.prevent="" class="page adicionar">
        <router-link :to="{ name: 'perfil' }" class="adicionar__voltar">
          <i class="fa-regular fa-circle-left" />
          Voltar
        </router-link>
        <h2 class="adicionar__titulo">Adicionar novo produto</h2>
        <section class="adicionar__imagens">
          <img
            v-show="imagem"
            :src="imagem"
            alt="pré visualização da imagem"
            class="adicionar__imagens--visualizacao"
          />
          <button
            v-show="imagem"
            aria-label="remover imagem selecionada"
            class="adicionar__imagens--remover"
            @click="imagem = ''"
          >
            <i class="fa-regular fa-circle-xmark"></i>
          </button>
          <label v-show="!imagem" for="carregarImagem" class="adicionar__imagens--carregada"
            ><i class="fa-regular fa-images"></i>
            <p>Clique para procurar no seu computador ou arraste a imagem no formato jpg</p></label
          >
          <input
            type="file"
            id="carregarImagem"
            name="carregarImagem"
            @change="ArquivoSelecionado"
            accept="image/jpg"
          />
        </section>
        <div class="adicionar__dados">
          <select class="inputados" v-model="idCategoria">
            <option disabled select value="">Escolha uma categoria</option>
            <option v-for="item in categoriasAtivas" :key="item._id" :value="item._id">
              {{ item.categoria }}
            </option>
          </select>
          <InputModelo
            v-for="grupo in inputs"
            :key="grupo.chave"
            :chave="grupo.chave"
            :rotulo="grupo.rotulo"
            :tipo="grupo.tipo"
            v-model="novoProduto[grupo.chave.toLowerCase()]"
            @registro="novoProduto[grupo.chave.toLowerCase()] = $event"
          />
          <BotaoModelo modelo="modelo-4" rotulo="Adicionar produto" @click="criarProduto()" />
        </div>
      </form>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import uploadImagem from "../assets/js/uploadImagem.js";
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
      idCategoria: "",
      imagem: "",
      novoProduto: {},
      inputs: [
        { chave: "nome", rotulo: "Nome do produto", tipo: "string" },
        { chave: "preco", rotulo: "Preço do produto", tipo: "number" },
        { chave: "descricao", rotulo: "Descrição do produto", tipo: "text" },
      ],
    };
  },
  computed: {
    ...mapGetters(["CategoriaCadastradas"]),
    categoriasAtivas() {
      return this.CategoriaCadastradas.filter((item) => {
        if (item.homePage) {
          return item;
        }
      });
    },
  },
  mounted() {
    this.$store.dispatch("categoriaCadastradas");
  },
  methods: {
    ArquivoSelecionado(event) {
      const nomeArquivo = event.target.files[0].name;
      const caminho = URL.createObjectURL(event.target.files[0]);
      const tipoEhValido = nomeArquivo.lastIndexOf(".jpg");
      if (tipoEhValido !== -1) {
        this.imagem = caminho;
      } else {
        console.log("erro! tipo invalido de arquivo");
      }
    },

    criarProduto() {
      const gerarNomeImagem = (num) => {
        let nome = Math.random().toString(36).substring(3, num);
        return nome;
      };
      const nomeImagem = `${gerarNomeImagem(13)}.jpg`;
      console.log(nomeImagem);
      uploadImagem(this.imagem, nomeImagem);
    },
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
  position: relative;
}
.adicionar__imagens button {
  color: var(--botao-padrao-20);
  cursor: pointer;
  font-size: 1.5rem;
  position: absolute;
  right: 1rem;
  top: 1rem;
}
.adicionar__imagens button:hover {
  color: var(--botao-padrao);
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
.adicionar__imagens--visualizacao {
  height: 250px;
  object-fit: cover;
  width: 100vw;
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
  .adicionar__imagens--visualizacao {
    height: 157px;
    width: 254px;
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
  .adicionar__imagens--visualizacao {
    height: 403px;
    width: 560px;
  }
}
</style>
