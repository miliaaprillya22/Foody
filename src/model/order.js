const connection = require('../config/mysql')
module.exports = {

   getOrder: () => {
      return new Promise((resolve, reject) => {
         connection.query(`SELECT * FROM order`, (error, result) => {
            !error ? resolve(result) : reject(new Error(error))
         })
      })
   },
   getByOrder_id: (id) => {
      return new Promise((resolve, reject) => {
         connection.query("SELECT * FROM order WHERE order_id = ?", id, (error, result) => {
            !error ? resolve(result) : reject(new Error(error))
         })
      })
   },
   postOrder: (setData) => {
      return new Promise((resolve, reject) => {
         connection.query("INSERT INTO order SET ? ", setData,
            (error, result) => {
               if (!error) {
                  const newResult = {
                     category_id: result.insertId,
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
   patchOrder: (setData, id) => {
      return new Promise((resolve, reject) => {
         connection.query("UPDATE order SET ? WHERE order_id = ?", [setData, id], (error, result) => {
            if (!error) {
               const newResult = {
                  category_id: id,
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
   deleteOrder: (id) => {
      return new Promise((resolve, reject) => {
         connection.query("DELETE FROM order WHERE order_id = ?", id,
            (error, result) => {
               if (!error) {
                  const newResult = {
                     id: id
                  }
                  resolve(newResult)
               } else {
                  reject(new Error(error))
               } z
            }
         )
      })
   },
}