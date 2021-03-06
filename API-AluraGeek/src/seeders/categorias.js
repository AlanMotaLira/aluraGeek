import Categoria from "../models/Categoria.js";

const categorias = [
  new Categoria({
    categoria: "Star Wars",
    grupo:"C0",
    produtos: [
      {
        grupo:"C0",
        nome: "Caneca 3D Stormtrooper",
        preco: 49.9,
        imagem: "unsplash_6FDXGY9J6y4",
        descricao:
          "Caneca 3d Stormtrooper Star Wars Licenciada!Agora, sim, temos uma coleção! Dá só uma olhadinha na caneca 3D capacete do StormTrooper! Diretamente de Star Wars para o seu café da manhã ficar muito mais especial.",
      },
      {
        grupo:"C0",
        nome: "Lego Darth Vader",
        preco: 529.9,
        imagem: "unsplash_epRFE_hBNjo",
        descricao: "LEGO Star Wars - Capacete de Darth Vader.",
      },
      {
        grupo:"C0",
        nome: "Action Figure Yoda",
        preco: 149.9,
        imagem: "unsplash_KeGToDVN0l4",
        descricao:
          "STAR WARS Boneco The Vintage Collection, Figura de 9,5 cm - Yoda (Dagobah).",
      },
      {
        grupo:"C0",
        nome: "Mattel Plush Baby Yoda",
        preco: 189.9,
        imagem: "unsplash_R8L1l9RN198",
        descricao:
          "Mattel Plush Baby Yoda Star Wars The Child, Verde, 11 polegadas.",
      },
      {
        grupo:"C0",
        nome: "Action Figure Stormtrooper",
        preco: 300.9,
        imagem: "unsplash_4OHkK555s1A",
        descricao:
          "Star Wars The Black Series Imperial Stormtrooper Toy 6-Inch-Scale The Mandalorian Collectible Action Figure, Kids Ages 4 and Up.",
      },
      {
        grupo:"C0",
        nome: "Action Figure Kylo Ren",
        preco: 250.9,
        imagem: "unsplash_1VV1MRafd7A",
        descricao: "Action Figure Kylo Ren Art Scale 1/10 Star Wars Serie 2",
      },
    ],
    homePage: 1,
  }),
  new Categoria({
    categoria: "Consoles",
    grupo:"C1",
    produtos: [
      {
        grupo:"C1",
        nome: "Controle Xbox One",
        preco: 459.9,
        imagem: "unsplash_0POwK6iAiRQ",
        descricao:
          "Compatível com Xbox One x, Xbox One s, Xbox One, ows 10 Inclui tecnologia Bluetooth para jogos em PCs e tablets ows 10 Fique no alvo com aderência texturizada Obtenha até o dobro da gama sem fio em comparação com os controladores Xbox One anteriores (testados usando o console Xbox).",
      },
      {
        grupo:"C1",
        nome: "PlayStaion 5",
        preco: 4099.9,
        imagem: "unsplash_caNzzoxls8Q",
        descricao:
          "Memória RAM: 16 GB GDDR6; Largura de banda da RAM: 448 GB/s; Taxa detransferência da RAM: 14 GB/s; Armazenamento interno: SSD customizado de 825 GB, barramento de 12 canais e controlador PCI Express 4.0, com taxa de transferência de 5,5 GB/s (tamanho original) ou 8,9 GB/s (compactado).",
      },
      {
        grupo:"C1",
        nome: "Nitendo NSE Classic Edition",
        preco: 1090.9,
        imagem: "unsplash_ZV7lnfyQLmA",
        descricao:
          "Com seu console NES Classic Edition você terá entretenimento garantido todos os dias. ua tecnologia foi criada para colocar novos desafios para jogadores novatos e especialistas.",
      },
      {
        grupo:"C1",
        nome: "Nintendo Switch",
        preco: 2500.0,
        imagem: "unsplash_wa5z9o9fgjw",
        descricao:
          "3 modos de jogar com um único console! Modelo com bateria estendida; duração varia de acordo com os jogos ou aplicações utilizados; com The Legend of Zelda: Breath of the Wild, por exemplo, a bateria dura aproximadamente 5, 5 horas. Conecta-se via Wi-Fi para jogos com vários jogadores",
      },
      {
        grupo:"C1",
        nome: "Xbox Series X",
        preco: 4710.9,
        imagem: "unsplash_Zjn4dT993-g",
        descricao:
          "Apresentamos o Xbox Series x, nosso console mais rápido e poderoso de todos os tempos. Jogue milhares de títulos de quatro gerações de consoles- todos os jogos têm melhor aparência e são melhor executados no Xbox Series x.",
      },
      {
        grupo:"C1",
        nome: "Game Boy Color",
        preco: 877.0,
        imagem: "unsplash_k-xYhI3-gJM",
        descricao:
          "Game Boy color Translúcido Divirta-se com uma gigantesca variedade de jogos do Game Boy Color. Agora você pode ter toda a nostalgia dos anos 2000 na palma da sua mão. Com esse console é possível reviver ou jogar pela primeira vez os famosos jogos como Pokémons, Metroid, Kirby, Super Mario Land e o inesquecível Tetris em um dos portáteis mais cobiçados da Nintendo.",
      },
    ],
    homePage: 1,
  }),
  new Categoria({
    categoria: "Diversos",
    grupo:"C2",
    produtos: [
      {
        grupo:"C2",
        nome: "Camisa Atari",
        preco: 52.9,
        imagem: "unsplash_fMP-oCze3AY",
        descricao:
          "Camiseta Manga Curta - Alta Qualidade! Composição: 100% algodão. Modelagem: regular unissex.",
      },
      {
        grupo:"C2",
        nome: "Camisa SNES",
        preco: 55.9,
        imagem: "unsplash_bUgaIaZysH0",
        descricao:
          "Tecido em malha importada, com mais brilho e toque acetinado. Não é necessário passar com ferro após lavagem devido a composição das fibras, basta retirar do varal e vestir.",
      },
      {
        grupo:"C2",
        nome: "Gear VR",
        preco: 799.9,
        imagem: "unsplash_MxVkWPiJALs",
        descricao:
          "Melhor biblioteca de jogos de realidade virtual: exploda, arraste e voe pela melhor biblioteca de jogos de realidade virtual. Oculus Rift S permite que você jogue centenas de jogos e exclusividades já disponíveis na loja Oculus, com muito mais por vir.",
      },
      {
        grupo:"C2",
        nome: "Miniatura Sonic",
        preco: 58.0,
        imagem: "unsplash_sYVY_ZKwaxU",
        descricao:
          "Personagem: Sonic Edição de Aniversário de 20 anos Game! Altura aproximadado produto: 17cm.",
      },
      {
        grupo:"C2",
        nome: "Best Portable Radio",
        preco: 50.0,
        imagem: "unsplash_jMT6BrgBuXU",
        descricao: "Tenham suas próprias conclusões.",
      },
      {
        grupo:"C2",
        nome: "pelucia Pikachu",
        preco: 190.9,
        imagem: "unsplash_r27umXAelDc",
        descricao:
          "Brinquedos de pelúcia de pikachu, de alta qualidade, coleção de bonecos de pelúcia de pikachu, 35cm alta qualidade!",
      },
    ],
    homePage: 1,
  }),
];

export default categorias;
