const { getHistory, getHistoryId, postHistory, patchHistory, deleteHistory } = require('../model/product')
const helper = require('../helper/index.js');

module.exports = {
   getHistory: async (request, response) => {
      try {
         const result = await getHistory();
         return helper.response(response, 200, "Success Get history", result)
      } catch (error) {
         return helper.response(response, 400, "Bad Request", error)
      }
   },
   getHistoryId: async (request, response) => {
      try {
         // const id = request.params.id
         const { id } = request.params
         const result = await getHistoryId(id)
         if (result.length > 0) {
            return helper.response(response, 200, "Success Ge history By ID", result)
         } else {
            return helper.response(response, 404, `Product By Id : ${id} Not Found`)
         }
      } catch (error) {
         return helper.response(response, 400, "Bad Request", error)
      }
   },
   postHistory: async (request, response) => {
      console.log(request.body)
      try {
         const setData = {
            product_created_at: new Date(),
         }
         const result = await postHistory(setData)
         // console.log(result)
         // response.send('Post Berhasil !')
         return helper.response(response, 200, "Success add ", result)
      } catch (error) {
         return helper.response(response, 400, "Bad Request", error)
      }
   },
   //--------------------------------------//
   patchHistory: async (request, response) => {
      try {
         const { id } = request.params
         const { history_id } = request.body
         const setData = {
            history_updated_at: new Date()

         }
         // const checkId = await getProductById(id)
         // if (checkId.length > 0) {
         const result = await patchHistory(setData, id)
         return helper.response(response, 201, "History Updated", result)
         //} else {
         //   return helper.response(response, 404, `Product By Id : ${id} Not Found`)
         //}

      } catch (error) {
         return helper.response(response, 400, "Bad Request", error)
      }
   },
   deleteHistory: async (request, response) => {
      try {
         const { id } = request.params
         const result = await deleteHistory(id)
         return helper.response(response, 201, "Product Deleted", result)
      } catch (error) {
         return helper.response(response, 400, "Bad Request", error)
      }
   }
}
