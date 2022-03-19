"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Usuarios",
      [
        {
          nome: 'Walter',
          email: 'walter@alurageek.com',
          senha:'$2b$12$pSNF4Hqm0QhR2ZWads9/o.dQ18ljdX7NPztImUIHkIOkYJ1TSwsfy',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Alan',
          email: 'alan@alurageek.com',
          senha:'$2b$12$HlvoVX0s0saa3EuMvO/Mu..4nihoalr5MH0MBDhSs2DrUEegqSGhy',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Pedro',
          email: 'pedro@alurageek.com',
          senha:'$2b$12$jIb5vjMVRFVDxIXznKJ79OBQSqqjfQfbwCVzA1zi0MBMwhkli5eIq',
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
