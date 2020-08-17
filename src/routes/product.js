const router = require("express").Router()
const { getProduct, getByproduct_Name, getProductById, postProduct, patchProduct, deleteProduct } = require('../controller/product')
// const product = require('../controller/product')

// [GET]
//router.get('/', getAllProduct);
// [GET]
router.get('/', getProduct);
// [BY ID]
router.get('/:id', getProductById);
// [ASC]
router.get('/:name', getByproduct_Name);
// [POST]
router.post('/', postProduct)
// [PATCH/PUT]
router.patch('/:id', patchProduct)
// [DELETE]
router.delete('/:id', deleteProduct)

module.exports = router