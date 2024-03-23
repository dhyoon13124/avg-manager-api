const Sequelize = require('sequelize');

module.exports = class Vehicle extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            VehicleID : {
                type : Sequelize.INTEGER,
                allowNull : false,
                unique : true,
            },
            Delete : {
                type : Sequelize.INTEGER,
                allowNull : true,
            },
            Precall : {
                type : Sequelize.INTEGER,
                allowNull : true,
            },
            MaxLoadPort : {
                type : Sequelize.INTEGER,
                allowNull : true,
            },
            VehiclePort : {
                type : Sequelize.INTEGER,
                allowNull : true,
            },
            VehicleType: {
                type : Sequelize.INTEGER,
                allowNull: true,
            },
            Name: {
                type: Sequelize.CHAR(100),
                allowNull: true,
            },
            HostName: {
                type: Sequelize.CHAR(50),
                allowNull: true,
            },
            VehicleIP: {
                type: Sequelize.CHAR(50),
                allowNull: true,
            }
        },{
            sequelize,
            timestamps : false,
            underscored : true,
            modelName : "User",
            tableName : "users",
            paranoid : false,
            collate : "utf8_general_ci",
            charset : "utf8",
        })
    }
};