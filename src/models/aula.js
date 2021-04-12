'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aula extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Aula.belongsTo(models.Curso, {
        foreignKey: "idCurso",
        targetKey: "id"
      })
      Aula.hasMany(models.UsuarioAula,{
        foreignKey: "idAula",
        sourceKey: "id"
      })
    }
  };
  Aula.init({
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    url_image: DataTypes.STRING,
    url_video: DataTypes.STRING,
    idCurso: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Aula',
  });
  return Aula;
};