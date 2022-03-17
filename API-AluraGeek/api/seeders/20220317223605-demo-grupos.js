"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "People",
      [
        {
          usuario_id: 1,
          name: "Star Wars",
          codigo: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          usuario_id: 2,
          name: "Consoles",
          codigo: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          usuario_id: 1,
          name: "Diversos",
          codigo: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("People", null, {});
  },
};
