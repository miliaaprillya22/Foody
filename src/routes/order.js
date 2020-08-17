const router = require("express").Router()
const { getOrder, getByOrder_id, postOrder, patchOrder, deleteOrder } = require('../controller/order')
// const product = require('../controller/product')

// [GET]
router.get('/', getOrder);
// [BY ID]
router.get('/:id', getByOrder_id);
// [POST]
router.post('/', postOrder);
// [PATCH/PUT]
router.patch('/:id', patchOrder);
// [DELETE]
router.delete('/:id', deleteOrder);

module.exports = router