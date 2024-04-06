const Sequelize = require('sequelize');

module.exports = class Point extends Sequelize.Model{
    static init(sequelize){
        return super.init(
            {
                id: {
                    type: Sequelize.INTEGER,
                    allowNull:false,
                    autoIncrement: true,
                    primaryKey: true,                
                },
                xcoord: {
                    type: Sequelize.INTEGER,
                    allowNull: true,
                },
                ycoord: {
                    type: Sequelize.INTEGER,
                    allowNull: true,
                },
                theta: {
                    type:Sequelize.DOUBLE,
                    allowNull: true,
                },
                angle_offset: {
                    type: Sequelize.DOUBLE,
                    allowNull: true,
                },
                value1: {
                    type:Sequelize.INTEGER,
                    allowNull:true,
                },
                value2: {
                    type:Sequelize.INTEGER,
                    allowNull:true,
                },
                value3: {
                    type:Sequelize.INTEGER,
                    allowNull:true,
                },
                remark: {
                    type:Sequelize.CHAR(256),
                    allowNull:true,
                },
                remark: {
                    type:Sequelize.CHAR(256),
                    allowNull:true,
                },
                create_time: {
                    type: Sequelize.DATE,
                    allowNull:true,
                },
                change_time: {
                    type: Sequelize.DATE,
                    allowNull:true,
                },

            },
            {
                sequelize,
                timestamps:false,
                underscored:true,
                modelName: 'test1',
                tableName: 'point',
                paranoid: false,
            },
        );
    }
};