'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsuarioCurso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UsuarioCurso.belongsTo(models.Usuario, {
        foreignKey: "idUsuario",
        targetKey: "id"
      })
      UsuarioCurso.belongsTo(models.Curso, {
        foreignKey: "idCurso",
        targetKey: "id"
      })
    }
  };
  UsuarioCurso.init({
    idUsuario: DataTypes.INTEGER,
    idCurso: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UsuarioCurso',
  });
  return UsuarioCurso;
};