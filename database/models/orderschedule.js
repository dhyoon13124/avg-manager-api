const Sequelize = require('sequelize');

module.exports = class Orderschedule extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            id : {
                type : Sequelize.INTEGER,
                allowNull : false,
                unique : true,
                primaryKey: true,
            },
            avg_id : {
                type: Sequelize.CHAR(50),
                allowNull : false,
            },
            lot_id : {
                type: Sequelize.CHAR(50),
                allowNull : true,
            },
            order_type : {
                type: Sequelize.CHAR(50),
                allowNull : true,
            },
            source : {
                type: Sequelize.CHAR(50),
                allowNull : true,
            },
            dest: {
                type: Sequelize.CHAR(50),
                allowNull: true,
            },
            recieve_time: {
                type: Sequelize.TIME,
                allowNull: true,
            },
            active_time: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            complete_time: {
                type: Sequelize.DATE,
                allowNull: true,
            }
        },{
            sequelize,
            timestamps : false,
            underscored : true,
            modelName : "test1",
            tableName : "orderschedule",
            paranoid : false,
        })
    }
};