const { getCategory, getCategoryId, postCategory, patchCategory, deleteCategoryt } = require('../model/category')
const helper = require('../helper/index.js');

module.exports = {
   getCategory: async (request, response) => {
      try {
         const result = await getCategory();
         return helper.response(response, 200, "Success Get category", result)
      } catch (error) {
         return helper.response(response, 400, "Bad Request", error)
      }
   },
   getCategoryId: async (request, response) => {
      try {
         // const id = request.params.id
         const { id } = request.params
         const result = await getCategoryId(id)
         if (result.length > 0) {
            return helper.response(response, 200, "Success Get Product-Category By ID", result)
         } else {
            return helper.response(response, 404, `Product-category By Id : ${id} Not Found`)
         }
      } catch (error) {
         return helper.response(response, 400, "Bad Request", error)
      }
   },
   postCategory: async (request, response) => {
      console.log(request.body)
      try {
         const setData = {
            category_name: request.body.category_name,
            category_created_at: new Date(),
         }
         const result = await postCategory(setData)
         // console.log(result)
         // response.send('Post Berhasil !')
         return helper.response(response, 200, "Success add ", result)
      } catch (error) {
         return helper.response(response, 400, "Bad Request", error)
      }
   },

   patchCategory: async (request, response) => {
      try {
         const { id } = request.params
         const { category_name } = request.body
         const setData = {
            category_name,
            category_updated_at: new Date()
         }
         // const checkId = await getProductById(id)
         // if (checkId.length > 0) {
         const result = await patchCategory(setData, id)
         return helper.response(response, 201, "category Updated", result)
         //} else {
         //   return helper.response(response, 404, `Product By Id : ${id} Not Found`)
         //}

      } catch (error) {
         return helper.response(response, 400, "Bad Request", error)
      }
   },
   deleteCategory: async (request, response) => {
      try {
         const { id } = request.params
         const result = await deleteCategory(id)
         return helper.response(response, 201, "category", result)
      } catch (error) {
         return helper.response(response, 400, "Bad Request", error)
      }
   },
}