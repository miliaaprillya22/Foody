const connection = require('../config/mysql')

module.exports = {
  getAllProduct: () => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM products`, (error, result) => {
        !error ? resolve(result) : reject(new Error(error))
      })
    })
  },
  //================================================

  // [Pagination Limit-offset-Join]
  getProduct: (limit, offset, search, sort) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT products.product_id, products.product_name, products.product_price, 
      category.category_name, products.product_created_at, products.product_updated_at, products.product_status FROM products 
      INNER JOIN category ON products.category_id = category.category_id WHERE products.product_name LIKE ? 
      ORDER BY ${sort} LIMIT ? OFFSET ?`, [`%${search}%`, limit, offset], (error, result) => {
        !error ? resolve(result) : reject(new Error(error))
      })
    })
  },
  getProductCount: () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT COUNT(*) as total FROM products", (error, result) => {
        !error ? resolve(result[0].total) : reject(new Error(error))
      })
    })
  },

  //===============================================


  //[Pengurutan data  BY  1.NAME 2.CATEGORY 3.PRICE 4.DATE]
  // [PRICE]
  getByproduct_Name: () => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM    products    ORDER BY    product_price    ASC`, (error, result) => {
        !error ? resolve(result) : reject(new Error(error))
      })
    })
  },
  getProductById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM products WHERE product_id = ?", id, (error, result) => {
        !error ? resolve(result) : reject(new Error(error))
      })
    })
  },
  postProduct: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO products SET ? ", setData,
        (error, result) => {
          if (!error) {
            const newResult = {
              product_id: result.insertId,
              ...setData
            };
            resolve(newResult);
          } else {
            reject(new Error(error));
          }
        }
      )
    })
  },
  patchProduct: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query("UPDATE products SET ? WHERE product_id = ?", [setData, id], (error, result) => {
        if (!error) {
          const newResult = {
            product_id: id,
            ...setData
          }
          resolve(newResult)
        } else {
          reject(new Error(error))
        }
        console.log(error)
      })
    })
  },
  deleteProduct: (id) => {
    return new Promise((resolve, reject) => {
      connection.query("DELETE FROM products WHERE product_id = ?", id,
        (error, result) => {
          if (!error) {
            const newResult = {
              id: id
            }
            resolve(newResult)
          } else {
            reject(new Error(error))
          }
        }
      )
    })
  }

}