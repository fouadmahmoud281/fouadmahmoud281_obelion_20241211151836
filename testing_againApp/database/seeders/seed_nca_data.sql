module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('NCAs', [
    {
      ncaName: 'Test NCA 1',
      agreement: 'agreed',
      submissionRules: 'Test submission rules 1'
    },
    {
      ncaName: 'Test NCA 2',
      agreement: 'notAgreed',
      submissionRules: 'Test submission rules 2'
    }
  ]),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('NCAs', null, {})
};
