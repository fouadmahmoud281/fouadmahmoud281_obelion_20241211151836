const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = new Sequelize('testing_again', 'root', 'root', {
  host: 'db',
  port: 3306,
  dialect: 'mysql',
  logging: false,
});

class TradingVenue extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      orderId: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      orderType: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      orderQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: true,
          min: 1,
        },
      },
    }, {
      sequelize,
      modelName: 'TradingVenue',
      tableName: 'trading_venue',
      timestamps: false,
    });
  }
}

TradingVenue.init(sequelize);

module.exports = TradingVenue;