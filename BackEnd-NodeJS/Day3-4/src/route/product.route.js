var getProduct=require('../controller/product.controller');
function productRoute(app) {
    // get all products
    app.get('/api/v1/product/getAllItem',getProduct)

    // get a product by id
    app.get('/api/v1/product/getItem',getProduct)
}

//export product route
module.exports = productRoute;

