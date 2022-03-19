"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Grupos extends Model {
    static associate(models) {
      Grupos.hasMany(models.Produtos,{
        foreignKey:"codigo"
      })
      Grupos.belongsTo(models.Usuarios,{
        foreignKey:"usuario_id"
      })
    }
  }
  Grupos.init(
    {
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [2, 100],
            msg: "Por favor, informe o nome",
          },
        },
      }
    },
    {
      sequelize,
      modelName: "Grupos",
      timestamps: true,
      updatedAt: 'updateTimestamp'
    }
  );
  return Grupos;
};
