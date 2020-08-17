const { getOrder, getByOrder_id, postOrder, patchOrder, deleteOrder } = require('../model/order')
const helper = require('../helper/index.js');

module.exports = {
   getOrder: async (request, response) => {
      try {
         const result = await getOrder();
         return helper.response(response, 200, "Success Get order", result)
      } catch (error) {
         return helper.response(response, 400, "Bad Request", error)
      }
   },
   getByOrder_id: async (request, response) => {
      try {
         // const id = request.params.id
         const { id } = request.params
         const result = await getByOrder_id(id)
         if (result.length > 0) {
            return helper.response(response, 200, "Success Get By ID", result)
         } else {
            return helper.response(response, 404, `Product-category By Id : ${id} Not Found`)
         }
      } catch (error) {
         return helper.response(response, 400, "Bad Request", error)
      }
   },
   postOrder: async (request, response) => {
      console.log(request.body)
      try {
         const setData = {
            name: request.body.name,
            order_created_at: new Date(),
         }
         const result = await postOrder(setData)
         // console.log(result)
         // response.send('Post Berhasil !')
         return helper.response(response, 200, "Success add ", result)
      } catch (error) {
         return helper.response(response, 400, "Bad Request", error)
      }
   },

   patchOrder: async (request, response) => {
      try {
         const { id } = request.params
         const { name } = request.body
         const setData = {
            name,
            name_updated_at: new Date()
         }
         const result = await patchOrder(setData, id)
         return helper.response(response, 201, "order Updated", result)
      } catch (error) {
         return helper.response(response, 400, "Bad Request", error)
      }
   },
   deleteOrder: async (request, response) => {
      try {
         const { id } = request.params
         const result = await deleteOrder(id)
         return helper.response(response, 201, "Berhasil delete  order", result)
      } catch (error) {
         return helper.response(response, 400, "Bad Request", error)
      }
   },
}