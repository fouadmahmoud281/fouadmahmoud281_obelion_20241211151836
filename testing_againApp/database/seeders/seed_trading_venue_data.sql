module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('trading_venue', [
      {
        orderId: 'ORD123456',
        orderType: 'Market',
        orderQuantity: 100,
      },
      {
        orderId: 'ORD123457',
        orderType: 'Limit',
        orderQuantity: 200,
      },
      {
        orderId: 'ORD123458',
        orderType: 'Stop',
        orderQuantity: 150,
      },
    ]),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('trading_venue', null, {}),
};
