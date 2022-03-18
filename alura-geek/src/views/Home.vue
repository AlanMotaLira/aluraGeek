<template>
  <div>
    <CabecalhoPrincipal />
    <main class="pageHome">
      <section>
        <HomeDestaque />
      </section>
      <section 
        v-for="grupo in grupoProdutos"
        :key="grupo.codigo"
      >
        <SecaoPage :titulo="grupo.nome">
          <template #cards>
            <CardPadrao
              v-for="(produto, index) in agruparCard(grupo.codigo)"
              :key="produto.image"
              :nome="produto.nome"
              :preco="produto.preco"
              :image="produto.image"
              :index="index"
            />
          </template>
        </SecaoPage>
      </section>
    </main>
  </div>
</template>

<script>
import CabecalhoPrincipal from "../components/cabecalhoPrincipal.vue";
import HomeDestaque from "../components/homeDestaque.vue";
import CardPadrao from "../components/cardPadrao.vue";
import SecaoPage from "../components/secaoPage.vue";


export default {
  name: "HomePage",
  components: {
    CardPadrao,
    CabecalhoPrincipal,
    HomeDestaque,
    SecaoPage,
  },
  data() {
    return {
      grupoProdutos: [
        { nome: "Star Wars", codigo: "co-01" },
        { nome: "Consoles", codigo: "co-02" },
        { nome: "Diversos", codigo: "co-03" },
      ],
      produtos: [
        {
          nome: "Caneca 3D Stormtrooper",
          preco: 49.9,
          image: "unsplash_6FDXGY9J6y4",
          codigo: "co-01",
        },
        { nome: "Lego Darth Vader", preco: 529.9, image: "unsplash_epRFE_hBNjo", codigo: "co-01" },
        {
          nome: "Action Figure Yoda",
          preco: 149.9,
          image: "unsplash_KeGToDVN0l4",
          codigo: "co-01",
        },
        {
          nome: "Mattel Plush Baby Yoda",
          preco: 189.9,
          image: "unsplash_R8L1l9RN198",
          codigo: "co-01",
        },
        {
          nome: "Action Figure Stormtrooper",
          preco: 300.9,
          image: "unsplash_4OHkK555s1A",
          codigo: "co-01",
        },
        {
          nome: "Action Figure Kylo Ren",
          preco: 250.9,
          image: "unsplash_1VV1MRafd7A",
          codigo: "co-01",
        },
        { nome: "Controle Xbox One", preco: 459.9, image: "unsplash_0POwK6iAiRQ", codigo: "co-02" },
        { nome: "PlayStaion 5", preco: 4099.9, image: "unsplash_caNzzoxls8Q", codigo: "co-02" },
        {
          nome: "Nitendo NSE Classic Edition",
          preco: 1090.9,
          image: "unsplash_ZV7lnfyQLmA",
          codigo: "co-02",
        },
        { nome: "Nitendo Switch", preco: 2500.0, image: "unsplash_wa5z9o9fgjw", codigo: "co-02" },
        { nome: "Xbox Series X", preco: 4710.9, image: "unsplash_Zjn4dT993-g", codigo: "co-02" },
        { nome: "Game Boy Color", preco: 877.0, image: "unsplash_k-xYhI3-gJM", codigo: "co-02" },
        { nome: "Camisa Atari", preco: 52.9, image: "unsplash_fMP-oCze3AY", codigo: "co-03" },
        { nome: "Camisa SNES", preco: 55.9, image: "unsplash_bUgaIaZysH0", codigo: "co-03" },
        { nome: "Gear VR", preco: 799.9, image: "unsplash_MxVkWPiJALs", codigo: "co-03" },
        { nome: "Miniatura Sonic", preco: 58.0, image: "unsplash_sYVY_ZKwaxU", codigo: "co-03" },
        {
          nome: "Best Portable Radio",
          preco: 50.0,
          image: "unsplash_jMT6BrgBuXU",
          codigo: "co-03",
        },
        { nome: "pelucia Pikachu", preco: 190.9, image: "unsplash_r27umXAelDc", codigo: "co-03" },
      ],
    };
  },

  methods: {
    agruparCard(grupo) {
      const cards = this.produtos.filter((item) => grupo === item.codigo);

      return cards.slice(0, 6);
    },
  },
};
</script>
  
