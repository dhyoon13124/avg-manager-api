// const express = require('express')
// const app = express()
// const ejs = require('ejs')
// const port = 3000
// const fs = require('fs')

// app.set('view engine', 'ejs')
// app.set('views','./views')
// app.use(express.static("./views"));
// app.use(express.static("./views/images"));



// app.get('/', (req, res) => {
//   res.render('index')   // ./views/index.ejs
// })

// app.get('/test', (req, res) => {
//     res.send('<h1>TEST</h1>')
//   })
  

// app.listen(port, () => {
//   console.log(`서버가 실행되었습니다. 접속  주소는 http://localhost:3000/ ${port}`)
// })


// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '1214',
//   database : 'test1'
// });
 
// connection.connect();
 
// connection.query('SELECT * from orderschedule', function (error, results, fields) {
//   if (error) throw error;
//   console.log('users: ', results);
// });
// connection.end();


// // app.get('/index', (req, res)=>{
// //     connection.query('select * from orderschedule', (err, results, fields) =>{
// //         if(err) throw err;
// //         console.log('results:',results);
// //         res.json(results);
// //     });
// // });

// app.get('/index', function(req, res){
//     db.collection('post').find().toArray(function(에러,결과){
//         console.log(결과);
//         res.render('index.ejs');
//     });
// })

