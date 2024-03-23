const express = require('express')

const { sequelize, Orderschedule } = require('./database/models');

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

app.get('/', async (req, res) => {
  const orders = await Orderschedule.findAll();
  res.send({
    data: orders,
  });
})

// app.get('/dashboard/order-count', function (req, res) {
//   client.query('select count(*) from orderschedule where ordertype ="LOAD_UNLOAD"',function(err,results) {
//     if (err) {
//       res.send(err)
//     } else {
//       res.send({
//         count: results
//       })
//     }
//   })
// })

app.get('/delete/:id', function (req, res) {
  
})

app.get('/insert', function (req, res) {

})

app.post('/insert', function (req, res) {

})

app.get('/edit/:id', function (req, res) {

})

app.post('/edit/:id', function (req, res) {

})

app.listen(52273, function () {
  console.log('Server is running at : http://127.0.0.1:52273')
})


// const express = require('express')
// const fs = require('fs')
// const ejs = require('ejs')
// const mysql = require('mysql')
// const bodyParser = require('body-parser')


// // app.use(express.static("./views"));
// // app.use(express.static("./views/images"));


// const client = mysql.createConnection({
//   user: 'root',
//   password: '1214', //본인의 db root 계정 비밀번호
//   database: 'test1' //본인의 db
// })

// const app = express()

// app.use(express.static("./views"));


// app.use(bodyParser.urlencoded({
//   extended: false
// }))

// app.listen(52273, function () {
//   console.log('Server is running at : http://127.0.0.1:52273')
// })

// app.get('/', function (req, res) {
//   fs.readFile('./views/index.ejs', 'utf8', function (err, data) {
//     client.query('select * from orderschedule', function (err, results) {
//       if (err) {
//         res.send(err)
//       } else {
//         res.send(ejs.render(data, {
//           data: results
//         }))
//       }
//     })
//   })
// })

// app.get('/', function (req, res) {
//   fs.readFile('./views/index.ejs', 'utf8', function (err, count) {
//     client.query('select count(*) from orderschedule where ordertype ="LOAD_UNLOAD"',function(err,results) {
//       if (err) {
//         res.send(err)
//       } else {
//         res.send(ejs.render(count, {
//           count: results
//         }))
//       }
//     })
//   })
// })

// app.get('/delete/:id', function (req, res) {
  
// })

// app.get('/insert', function (req, res) {

// })

// app.post('/insert', function (req, res) {

// })

// app.get('/edit/:id', function (req, res) {

// })

// app.post('/edit/:id', function (req, res) {

// })