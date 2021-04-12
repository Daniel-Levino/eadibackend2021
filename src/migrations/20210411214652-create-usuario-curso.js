'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UsuarioCursos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idUsuario: {
        field: "idUsuario",
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Usuarios",
          key: "id"
        }
      },
      idCurso: {
        field: "idCurso",
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Cursos",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UsuarioCursos');
  }
};