var getProduct=require('../controller/product.controller');
function productRoute(app) {
    // define route
    app.get('/api/v1/product/getAllItem',getProduct)
}

//export product route
module.exports = productRoute;

