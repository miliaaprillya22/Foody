const router = require("express").Router()
const { getHistory, getHistoryId, postHistory, patchHistory, deleteHistory } = require('../controller/history')
// const product = require('../controller/product')

// [GET]
router.get('/', getHistory);
// [BY ID]
router.get('/:id', getHistoryId);
// [POST]
router.post('/', postHistory);
// [PATCH/PUT]
router.patch('/:id', patchHistory);
// [DELETE]
router.delete('/:id', deleteHistory);

module.exports = router