"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Usuarios",
      [
        {
          nome: 'Walter',
          email: 'walter@alurageek.com',
          senha:'walter',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Alan',
          email: 'alan@alurageek.com',
          senha:'123456',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Pedro',
          email: 'pedro@alurageek.com',
          senha:'pedro',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Usuarios", null, {});
  },
};
