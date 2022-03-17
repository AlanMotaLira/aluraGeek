"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Produtos",
      [
        {
          usuario_id: 1,
          codigo: 1,
          nome: "Caneca 3D Stormtrooper",
          preco: 49.9,
          imagem: "unsplash_6FDXGY9J6y4",
          descricao:
            "Caneca 3d Stormtrooper Star Wars Licenciada!Agora, sim, temos uma coleção! Dá só uma olhadinha na caneca 3D capacete do StormTrooper! Diretamente de Star Wars para o seu café da manhã ficar muito mais especial.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          usuario_id: 1,
          codigo: 1,
          nome: "Lego Darth Vader",
          preco: 529.9,
          imagem: "unsplash_epRFE_hBNjo",
          descricao: "LEGO Star Wars - Capacete de Darth Vader.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          usuario_id: 2,
          codigo: 1,
          nome: "Action Figure Yoda",
          preco: 149.9,
          imagem: "unsplash_KeGToDVN0l4",
          descricao:
            "STAR WARS Boneco The Vintage Collection, Figura de 9,5 cm - Yoda (Dagobah).",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          usuario_id: 2,
          codigo: 1,
          nome: "Mattel Plush Baby Yoda",
          preco: 189.9,
          imagem: "unsplash_R8L1l9RN198",
          descricao:
            "Mattel Plush Baby Yoda Star Wars The Child, Verde, 11 polegadas.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          usuario_id: 2,
          codigo: 1,
          nome: "Action Figure Stormtrooper",
          preco: 300.9,
          imagem: "unsplash_4OHkK555s1A",
          descricao:
            "Star Wars The Black Series Imperial Stormtrooper Toy 6-Inch-Scale The Mandalorian Collectible Action Figure, Kids Ages 4 and Up.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          usuario_id: 3,
          codigo: 1,
          nome: "Action Figure Kylo Ren",
          preco: 250.9,
          image: "unsplash_1VV1MRafd7A",
          descricao: "Action Figure Kylo Ren Art Scale 1/10 Star Wars Serie 2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          usuario_id: 3,
          codigo: 2,
          nome: "Controle Xbox One",
          preco: 459.9,
          image: "unsplash_0POwK6iAiRQ",
          descricao:
            "Compatível com Xbox One x, Xbox One s, Xbox One, ows 10 Inclui tecnologia Bluetooth para jogos em PCs e tablets ows 10 Fique no alvo com aderência texturizada Obtenha até o dobro da gama sem fio em comparação com os controladores Xbox One anteriores (testados usando o console Xbox).",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          usuario_id: 1,
          codigo: 2,
          nome: "PlayStaion 5",
          preco: 4099.9,
          image: "unsplash_caNzzoxls8Q",
          descricao:
            "Memória RAM: 16 GB GDDR6; Largura de banda da RAM: 448 GB/s; Taxa detransferência da RAM: 14 GB/s; Armazenamento interno: SSD customizado de 825 GB, barramento de 12 canais e controlador PCI Express 4.0, com taxa de transferência de 5,5 GB/s (tamanho original) ou 8,9 GB/s (compactado).",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          usuario_id: 1,
          codigo: 2,
          nome: "Nitendo NSE Classic Edition",
          preco: 1090.9,
          image: "unsplash_ZV7lnfyQLmA",
          descricao:
            "Com seu console NES Classic Edition você terá entretenimento garantido todos os dias. ua tecnologia foi criada para colocar novos desafios para jogadores novatos e especialistas.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          usuario_id: 1,
          codigo: 2,
          nome: "Nintendo Switch",
          preco: 2500.0,
          image: "unsplash_wa5z9o9fgjw",
          descricao:
            "3 modos de jogar com um único console! Modelo com bateria estendida; duração varia de acordo com os jogos ou aplicações utilizados; com The Legend of Zelda: Breath of the Wild, por exemplo, a bateria dura aproximadamente 5, 5 horas. Conecta-se via Wi-Fi para jogos com vários jogadores",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          usuario_id: 1,
          codigo: 2,
          nome: "Xbox Series X",
          preco: 4710.9,
          image: "unsplash_Zjn4dT993-g",
          descricao:
            "Apresentamos o Xbox Series x, nosso console mais rápido e poderoso de todos os tempos. Jogue milhares de títulos de quatro gerações de consoles- todos os jogos têm melhor aparência e são melhor executados no Xbox Series x.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          usuario_id: 1,
          codigo: 2,
          nome: "Game Boy Color",
          preco: 877.0,
          image: "unsplash_k-xYhI3-gJM",
          descricao:
            "Game Boy color Translúcido Divirta-se com uma gigantesca variedade de jogos do Game Boy Color. Agora você pode ter toda a nostalgia dos anos 2000 na palma da sua mão. Com esse console é possível reviver ou jogar pela primeira vez os famosos jogos como Pokémons, Metroid, Kirby, Super Mario Land e o inesquecível Tetris em um dos portáteis mais cobiçados da Nintendo.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          usuario_id: 2,
          codigo: 3,
          nome: "Camisa Atari",
          preco: 52.9,
          image: "unsplash_fMP-oCze3AY",
          descricao:
            "Camiseta Manga Curta - Alta Qualidade! Composição: 100% algodão. Modelagem: regular unissex.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          usuario_id: 2,
          codigo: 3,
          nome: "Camisa SNES",
          preco: 55.9,
          image: "unsplash_bUgaIaZysH0",
          descricao:
            "Tecido em malha importada, com mais brilho e toque acetinado. Não é necessário passar com ferro após lavagem devido a composição das fibras, basta retirar do varal e vestir.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          usuario_id: 2,
          codigo: 3,
          nome: "Gear VR",
          preco: 799.9,
          image: "unsplash_MxVkWPiJALs",
          descricao:
            "Melhor biblioteca de jogos de realidade virtual: exploda, arraste e voe pela melhor biblioteca de jogos de realidade virtual. Oculus Rift S permite que você jogue centenas de jogos e exclusividades já disponíveis na loja Oculus, com muito mais por vir.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          usuario_id: 2,
          codigo: 3,
          nome: "Miniatura Sonic",
          preco: 58.0,
          image: "unsplash_sYVY_ZKwaxU",
          descricao:
            "Personagem: Sonic Edição de Aniversário de 20 anos Game! Altura aproximadado produto: 17cm.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          usuario_id: 1,
          codigo: 3,
          nome: "Best Portable Radio",
          preco: 50.0,
          image: "unsplash_jMT6BrgBuXU",
          descricao: "Tenham suas próprias conclusões.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          usuario_id: 3,
          codigo: 3,
          nome: "pelucia Pikachu",
          preco: 190.9,
          image: "unsplash_r27umXAelDc",
          descricao:
            "Brinquedos de pelúcia de pikachu, de alta qualidade, coleção de bonecos de pelúcia de pikachu, 35cm alta qualidade!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Produtos", null, {});
  },
};
