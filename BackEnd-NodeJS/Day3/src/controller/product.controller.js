var listproducts=require('../data/products');

function getProduct(req, res) {
    res.send({
        products:listproducts
    });
}

module.exports = getProduct;