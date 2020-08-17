const route = require("express").Router()

// import route disini untuk setiap file nya
// [PRODUCT] 
const product = require('./routes/product')
// [CATEGORY]
const category = require('./routes/category')
// [History]
const history = require('./routes/history')
//[ORDER]
const order = require('./routes/order')



//--------------------------
// buat middle disini untuk setiap file nya
// [PRODUCT] 
route.use('/product', product)

// [CATEGORY]
route.use('/category', category)
// [ORDER for HISTORY]
route.use('/order', order)

// [history]
route.use('/history', history)

module.exports = route