const express = require('express')

const { sequelize } = require('./database/models');
const routes = require('./routes');

sequelize.sync({force : false})
  .then(() => {console.log('db ok')})
  .catch((err) => {console.log(err)})

const app = express()

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

app.use('/', routes);

app.listen(52273, function () {
  console.log('Server is running at : http://127.0.0.1:52273')
})
