const Sequelize = require('sequelize');

module.exports = class Segment extends Sequelize.Model {
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
                template_id: {
                    type: Sequelize.INTEGER,
                    allowNull:true,                    
                },
                start_point_id:{
                    type: Sequelize.INTEGER,
                    allowNull:true, 
                },
                start_xcoord:{
                    type: Sequelize.INTEGER,
                    allowNull:true, 
                },
                start_ycoord:{
                    type: Sequelize.INTEGER,
                    allowNull:true, 
                },
                start_th:{
                    type: Sequelize.DOUBLE,
                    allowNull:true, 
                },
                end_point_id:{
                    type: Sequelize.INTEGER,
                    allowNull:true, 
                },
                end_xcoord:{
                    type: Sequelize.INTEGER,
                    allowNull:true, 
                },
                end_ycoord:{
                    type: Sequelize.INTEGER,
                    allowNull:true, 
                },
                end_th:{
                    type: Sequelize.DOUBLE,
                    allowNull:true, 
                },
                speed:{
                    type: Sequelize.INTEGER,
                    allowNull:true, 
                },
                length:{
                    type: Sequelize.INTEGER,
                    allowNull:true, 
                },
                rotation_dir:{
                    type: Sequelize.INTEGER,
                    allowNull:true, 
                },
                travel_time:{
                    type: Sequelize.DOUBLE,
                    allowNull:true, 
                },
                diameter:{
                    type: Sequelize.INTEGER,
                    allowNull:true, 
                },
                derailment_side_area:{
                    type: Sequelize.INTEGER,
                    allowNull:true, 
                },
                derailment_theta_area:{
                    type: Sequelize.INTEGER,
                    allowNull:true, 
                },
                value1:{
                    type: Sequelize.INTEGER,
                    allowNull:true, 
                },
                value2:{
                    type: Sequelize.INTEGER,
                    allowNull:true, 
                },
                value3:{
                    type: Sequelize.INTEGER,
                    allowNull:true, 
                },
                line_id:{
                    type: Sequelize.INTEGER,
                    allowNull:true, 
                },
                invisible:{
                    type: Sequelize.INTEGER,
                    allowNull:true, 
                },
                remark:{
                    type: Sequelize.CHAR(254),
                    allowNull:true, 
                },
                create_time:{
                    type: Sequelize.DATE,
                    allowNull:true, 
                },
                change_time:{
                    type: Sequelize.DATE,
                    allowNull:true, 
                },

            },
            {
                sequelize,
                timestamps: false,
                underscored: true,
                modelName: 'test1',
                tableName: 'segement',
                paranoid: false,
            },
        );
    }
};