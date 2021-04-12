'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Curso.belongsTo(models.Usuario, {
        foreignKey: "idUsuario",
        targetKey: "id"
      })
      Curso.hasMany(models.Aula, {
        foreignKey: "idCurso",
        sourceKey: "id"
      })
      Curso.hasMany(models.UsuarioCurso, {
        foreignKey: "idCurso",
        sourceKey: "id"
      })
    }
  };
  Curso.init({
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    url_image: DataTypes.STRING,
    idUsuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Curso',
  });
  return Curso;
};