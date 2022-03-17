"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Produtos extends Model {
    static associate(models) {
      Produtos.belongsTo(models.Grupos,{
        foreignKey:"codigo"
      })
      Produtos.belongsTo(models.Usuarios,{
        foreignKey:"usuario_id"
      })
    }
  }
  Produtos.init(
    {
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [2, 50],
            msg: "Por favor, informe o nome",
          },
        },
      },
      preco: {
        type: DataTypes.FLOAT,
      },
      imagem: {
        type: DataTypes.STRING,
      },
      descricao: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Produtos",
    }
  );
  return Produtos;
};
