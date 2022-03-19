"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Grupos",
      [
        {
          usuario_id: 1,
          nome: "Star Wars",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          usuario_id: 2,
          nome: "Consoles",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          usuario_id: 1,
          nome: "Diversos",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Grupos", null, {});
  },
};
