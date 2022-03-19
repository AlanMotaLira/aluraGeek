'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      usuario_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Usuarios", key: "id" },
      },
      codigo:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Grupos", key: "id" },
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      preco: {
        type: Sequelize.FLOAT
      },
      imagem: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING(5000)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Produtos');
  }
};