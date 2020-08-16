const { getByproduct_Name, getProduct, getProductCount, getProductById, postProduct, patchProduct, deleteProduct } = require('../model/product')
const qs = require('querystring')
const helper = require('../helper/index.js');
const { search } = require('../routes/product');

const getPrevLink = (page, currentQuery) => {
  if (page > 1) {
    const generatedPage = {
      page: page - 1
    }
    const resultPrevLink = { ...currentQuery, ...generatedPage }
    return qs.stringify(resultPrevLink)
  } else {
    return null
  }
}

const getNextLink = (page, totalPage, currentQuery) => {
  if (page < totalPage) {
    const generatedPage = {
      page: page + 1
    }
    const resultNextLink = { ...currentQuery, ...generatedPage }
    return qs.stringify(resultNextLink)
  } else {
    return null
  }
}

module.exports = {
  getAllProduct: async (request, response) => {
    let { page, limit, search, sort } = request.query
    // page = parseInt(page)
    // limit = parseInt(limit)
    // search = ''
    // sort = 'product_id'
    page === undefined ? page = 1 : page = parseInt(page)
    limit === undefined ? limit = 3 : limit = parseInt(limit)
    let totalData = 0
    if (search === undefined) {
      search = ''
      totalData = await getProduct()
    } else {
      totalData = await getProduct(search)
    }
    if (sort === undefined) {
      sort = 'product_id'

    }
    //  let totalData = await getProductCount();
    let totalPage = Math.ceil(totalData / limit)
    let offset = page * limit - limit
    let prevLink = getPrevLink(page, request.query)
    let nextLink = getNextLink(page, totalPage, request.query)
    const pageInfo = {

      page, // page: page
      totalPage,
      limit,
      totalData,
      prevLink: prevLink && `http://127.0.0.1:3001/product?${prevLink}`, nextLink: nextLink && `http://127.0.0.1:3001/product?${nextLink}`
    }
    try {
      const result = await getProduct(limit, offset, search, sort);
      return helper.response(response, 200, "Success Get Product", result, pageInfo)
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error)
    }
  },
  getProductById: async (request, response) => {
    try {
      // const id = request.params.id
      const { id } = request.params
      const result = await getProductById(id)
      if (result.length > 0) {
        return helper.response(response, 200, "Success Get Product By ID", result)
      } else {
        return helper.response(response, 404, `Product By Id : ${id} Not Found`)
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error)
    }
  },

  // [ASC NAME]
  getByproduct_Name: async (request, response) => {
    try {
      let result = await getByproduct_Name()
      return helper.response(response, 200, "Success Get name product", result)
    } catch (error) {
      return helper.response(response, 400, "Bad Request to Show Product Name", error)
    }
  },

  postProduct: async (request, response) => {
    console.log(request.body)
    try {
      const setData = {
        product_name: request.body.product_name,
        product_price: request.body.product_price,
        category_id: request.body.category_id,
        product_created_at: new Date(),
        product_status: request.body.product_status,
      }
      const result = await postProduct(setData)
      // console.log(result)
      // response.send('Post Berhasil !')
      return helper.response(response, 200, "Success add ", result)
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error)
    }
  },
  //--------------------------------------//
  patchProduct: async (request, response) => {
    try {
      const { id } = request.params
      const { product_name, product_price, product_status, category_id } = request.body
      const setData = {
        product_name,
        product_price,
        category_id,
        product_updated_at: new Date(),
        product_status
      }
      // const checkId = await getProductById(id)
      // if (checkId.length > 0) {
      const result = await patchProduct(setData, id)
      return helper.response(response, 201, "Product Updated", result)
      //} else {
      //   return helper.response(response, 404, `Product By Id : ${id} Not Found`)
      //}
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error)
    }
  },
  deleteProduct: async (request, response) => {
    try {
      const { id } = request.params
      const result = await deleteProduct(id)
      return helper.response(response, 201, "Product Deleted", result)
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error)
    }
  },
}
