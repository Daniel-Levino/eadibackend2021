'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Usuario.hasMany(models.Curso, {
        foreignKey: "idUsuario",
        sourceKey: "id"
      })
      Usuario.hasMany(models.UsuarioCurso, {
        foreignKey: "idUsuario",
        sourceKey: "id"
      })
      Usuario.hasMany(models.UsuarioAula, {
        foreignKey: "idUsuario",
        sourceKey: "id"
      })
    }
  };
  Usuario.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    tipo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};