'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsuarioAula extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UsuarioAula.belongsTo(models.Usuario, {
        foreignKey: "idUsuario",
        targetKey: "id"
      })
      UsuarioAula.belongsTo(models.Aula, {
        foreignKey: "idAula",
        targetKey: "id"
      })
    }
  };
  UsuarioAula.init({
    idUsuario: DataTypes.INTEGER,
    idAula: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UsuarioAula',
  });
  return UsuarioAula;
};