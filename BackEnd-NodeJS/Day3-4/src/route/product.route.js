var {getProduct,getProductById,createProduct,updateProduct,deleteProduct} = require('../controller/product.controller');
function productRoute(app) {
    // get all products
    app.get('/api/v1/product/getAllItem',getProduct)

    // get a product by id
    app.get('/api/v1/product/getItem/:id',getProductById)
    //create a product
    app.post('/api/v1/product/createItem',createProduct)
    //update a product
    app.put('/api/v1/product/updateItem/:id',updateProduct)
    //delete a product
    app.delete('/api/v1/product/deleteItem/:id',deleteProduct)
}

//export product route
module.exports = productRoute;

