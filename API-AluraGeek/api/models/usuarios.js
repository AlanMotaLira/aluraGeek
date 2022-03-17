"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    static associate(models) {
      Usuarios.hasMany(models.Grupos,{
        foreignKey:"usuario_id"
      })
      Usuarios.hasMany(models.Produtos,{
        foreignKey:"usuario_id"
      })
    }
  }
  Usuarios.init(
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
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: {
            args: true,
            msg: "dados de email invalid",
          },
        },
      },
      senha: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Usuarios",
      paranoid: true,
    }
  );
  return Usuarios;
};
