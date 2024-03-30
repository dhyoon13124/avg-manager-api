const Sequelize = require('sequelize');
const dayjs = require('dayjs');

module.exports = class OrderSchedule extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            id : {
                type : Sequelize.INTEGER,
                allowNull : false,
                unique : true,
                primaryKey: true,
            },
            agv_id : {
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
            receive_time: {
                type: Sequelize.DATE,
                allowNull: true,
                get(columnKey) {
                    const date = this.getDataValue(columnKey);
                    if (!date) return '-';
                    return dayjs(date).format('YYYY-MM-DD HH:mm:ss')
                },
            },
            active_time: {
                type: Sequelize.DATE,
                allowNull: true,
                get(columnKey) {
                    const date = this.getDataValue(columnKey);
                    if (!date) return '-';
                    return dayjs(date).format('YYYY-MM-DD HH:mm:ss')
                },
            },
            complete_time: {
                type: Sequelize.DATE,
                allowNull: true,
                get(columnKey) {
                    const date = this.getDataValue(columnKey);
                    if (!date) return '-';
                    return dayjs(date).format('YYYY-MM-DD HH:mm:ss')
                },
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
