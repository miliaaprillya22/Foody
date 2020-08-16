const router = require("express").Router()
const { getByproduct_Name, getAllProduct, getProductById, postProduct, patchProduct, deleteProduct } = require('../controller/product')
// const product = require('../controller/product')

// [GET]
router.get('/', getAllProduct);
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