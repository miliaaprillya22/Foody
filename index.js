// [1]
const expressSearch = require('express-search');
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser') // untuk melihat dan menangkap data di postman
const morgan = require('morgan')
//----------------------
const cors = require('cors')
//const linter = require('linter');
// ===================================
const routerNavigation = require('./src');
const { request, response } = require('express');
// ===================================

const app = express();
//app.use('/api/search/', expressSearch.setup(mySearch));
//app.use(linter())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan("dev"))

app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500")
  response.header("Access-Control-Allow-Headers", "Origin, X-Request-With, Content-Type, Accept, Authorization")
  next()
})

// ===================================
app.use('/', routerNavigation)
// ===================================

app.get('*', (request, response) => {
  response.status(404).send('Path Not Found !')
})

app.listen(3001, '127.0.0.1', () => {
  console.log('Express app is listening on host: 127.0.0.1 and port: 3001');
});
