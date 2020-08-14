const connection = require('../config/mysql')

module.exports = {
  getAllProduct: () => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM products`, (error, result) => {
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