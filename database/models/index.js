const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);

const OrderSchedule = require('./orderschedule')
const Vehicle = require('./vehicle')

// 테이블 생성
OrderSchedule.init(sequelize);
Vehicle.init(sequelize);

//db에 객체들 추가
db.OrderSchedule = OrderSchedule;
db.Vehicle = Vehicle


db.sequelize = sequelize;
db.Sequelize = Sequelize;

// 이 파일을 호출하면 모든것을 담은 db객체를 쓸수 있음
module.exports = db;
