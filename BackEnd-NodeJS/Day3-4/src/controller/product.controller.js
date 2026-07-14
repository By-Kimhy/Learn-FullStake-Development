var listproducts = require('../data/products');
function getProduct(req, res) {
    res.send({
        products: listproducts
    });
}
function getProductById(req, res) {
    var id = req.params.id;
    var product = listproducts.find(function (product) {
        return product.id === id;
    });
    if (product) {
        res.send({
            product: product
        });
    } else {
        res.status(404).send({
            message: "Product not found"
        });
    }
}
function createProduct(req, res) {
    var product = req.body;
    listproducts.push(product);
    res.status(201).send({
        isSuccess: true,
        message: "Product created successfully",
        data: product,
        products: listproducts
    });
}
function updateProduct(req, res) {
    var id = req.params.id;
    var product = req.body;
    var index = listproducts.findIndex(function (product) {
        return product.id === id;
    });
    if (index !== -1) {
        listproducts[index] = product;
        res.status(202).send({
            isSuccess: true,
            message: "Product updated successfully",
            data: product,
            products: listproducts
        });
    } else {
        res.status(404).send({
            message: "Product not found"
        });
    }
}
function deleteProduct(req, res) {
    var id = req.params.id;
    var index = listproducts.findIndex(p => p.id === id);
    if (index !== -1) {
        listproducts.splice(index, 1);
        res.status(200).send({
            isSuccess: true,
            message: "Product deleted successfully",
            products: listproducts
        });
    } else {
        res.status(404).send({
            message: "Product not found"
        });
    }
}

module.exports = {
    getProduct,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};