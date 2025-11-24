/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     return await queryInterface.changeColumn('alunos', 'email', {
      id: Sequelize.STRING,
      allowNull: false,
      unique: true,
    });
  },

  async down () {}
};
