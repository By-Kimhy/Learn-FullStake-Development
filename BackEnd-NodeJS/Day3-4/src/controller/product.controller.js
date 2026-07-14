var listproducts=require('../data/products');

function getProduct(req, res) {
    // query parameter
    var id = req.query.name;
    res.send({
        // products:listproducts
        id
    });
}

module.exports = getProduct;