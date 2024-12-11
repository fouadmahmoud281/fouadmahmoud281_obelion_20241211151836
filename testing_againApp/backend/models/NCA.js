const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('testing_again', 'root', 'root', {
  host: 'db',
  port: 3306,
  dialect: 'mysql'
});

class NCA extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      ncaName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      agreement: {
        type: DataTypes.ENUM('agreed', 'notAgreed'),
        allowNull: false
      },
      submissionRules: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      }
    }, {
      sequelize,
      modelName: 'NCA',
      timestamps: false
    });
  }
}

NCA.init(sequelize);

module.exports = NCA;