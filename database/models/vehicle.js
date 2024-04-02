const Sequelize = require('sequelize');

module.exports = class Vehicle extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          unique: true,
          autoIncrement: true,
          primaryKey: true,
        },
        is_deleted: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
        },
        preCall: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        maxLoadPort: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        vehiclePort: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        vehicleType: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        name: {
          type: Sequelize.CHAR(100),
          allowNull: true,
        },
        hostName: {
          type: Sequelize.CHAR(50),
          allowNull: true,
        },
        vehicleIp: {
          type: Sequelize.CHAR(50),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'Vehicle',
        tableName: 'Vehicle',
        paranoid: false,
        collate: 'utf8_general_ci',
        charset: 'utf8',
      },
    );
  }
};
