const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);

const OrderSchedule = require('./orderschedule');
const Vehicle = require('./vehicle');
const Point = require('./point');


// 테이블 생성
OrderSchedule.init(sequelize);
Vehicle.init(sequelize);
Point.init(sequelize);


//db에 객체들 추가
db.OrderSchedule = OrderSchedule;
db.Vehicle = Vehicle;
db.Point = Point;

//이거 왜 3개 있는지 모르겠음.. 원래 2개였는데 테이블 하나 추가하고 혹시나해서 하나 더넣음ㅋ
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// 이 파일을 호출하면 모든것을 담은 db객체를 쓸수 있음
module.exports = db;
