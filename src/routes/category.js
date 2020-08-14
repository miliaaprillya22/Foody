const router = require("express").Router()
const { getCategory, getCategoryId, postCategory, patchCategory, deleteCategory } = require('../controller/category')
// const product = require('../controller/product')

// [GET]
router.get('/', getCategory);
// [BY ID]
router.get('/:id', getCategoryId);
// [POST]
router.post('/', postCategory);
// [PATCH/PUT]
router.patch('/:id', patchCategory);
// [DELETE]
router.delete('/:id', deleteCategory);

module.exports = router