'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UsuarioAulas', {
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
      idAula: {
        field: "idAula",
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Aulas",
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
    await queryInterface.dropTable('UsuarioAulas');
  }
};