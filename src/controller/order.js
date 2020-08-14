// const { getOrder, getOrderId, postOrder, patchOrder, deleteOrder } = require('../model/product')
// const helper = require('../helper/index.js');

// module.exports = {
//    getOrder: async (request, response) => {
//       try {
//          const result = await getAllProduct();
//          return helper.response(response, 200, "Success Get Product", result)
//       } catch (error) {
//          return helper.response(response, 400, "Bad Request", error)
//       }
//    },
//    getOrderId: async (request, response) => {
//       try {
//          // const id = request.params.id
//          const { id } = request.params
//          const result = await getProductById(id)
//          if (result.length > 0) {
//             return helper.response(response, 200, "Success Get Product By ID", result)
//          } else {
//             return helper.response(response, 404, `Product By Id : ${id} Not Found`)
//          }
//       } catch (error) {
//          return helper.response(response, 400, "Bad Request", error)
//       }
//    },
//    postOrder: async (request, response) => {
//       console.log(request.body)
//       try {
//          const setData = {
//             product_name: request.body.product_name,
//             product_price: request.body.product_price,
//             product_created_at: new Date(),
//             product_status: request.body.product_status,
//          }
//          const result = await postProduct(setData)
//          // console.log(result)
//          // response.send('Post Berhasil !')
//          return helper.response(response, 200, "Success add ", result)
//       } catch (error) {
//          return helper.response(response, 400, "Bad Request", error)
//       }
//    },
//    //--------------------------------------//
//    patchOrder: async (request, response) => {
//       try {
//          const { id } = request.params
//          const { product_name, product_price, product_status } = request.body
//          const setData = {
//             product_name,
//             product_price,
//             product_updated_at: new Date(),
//             product_status
//          }
//          // const checkId = await getProductById(id)
//          // if (checkId.length > 0) {
//          const result = await patchProduct(setData, id)
//          return helper.response(response, 201, "Product Updated", result)
//          //} else {
//          //   return helper.response(response, 404, `Product By Id : ${id} Not Found`)
//          //}

//       } catch (error) {
//          return helper.response(response, 400, "Bad Request", error)
//       }
//    },
//    deleteOrder: async (request, response) => {
//       try {
//          const { id } = request.params
//          const result = await deleteOrder(id)
//          return helper.response(response, 201, "Product Deleted", result)
//       } catch (error) {
//          return helper.response(response, 400, "Bad Request", error)
//       }
//    }
// }
