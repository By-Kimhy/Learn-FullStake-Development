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
    // var product = req.body;
    // listproducts.push(product);
    // res.status(201).send({
    //     isSuccess: true,
    //     message: "Product created successfully",
    //     data: product,
    //     products: listproducts
    // });

    var product = req.body;
    var newProduct = {
        id: listproducts.length + 1,
        name: product.name,
        category: product.category,
        price: product.price,
        currency: product.currency,
        stock: product.stock,
        tags: product.tags
    };
    listproducts.push(newProduct);
    res.status(201).send({
        isSuccess: true,
        message: "Product created successfully",
        data: newProduct,
        products: listproducts
    });
}
function updateProduct(req, res) {
    // var id = req.params.id;
    // var product = req.body;
    // var index = listproducts.findIndex(
    //     function (product) {
    //         return product.id === id;
    //     });
    // if (index !== -1) {
    //     listproducts[index] = product;
    //     res.status(202).send({
    //         isSuccess: true,
    //         message: "Product updated successfully",
    //         data: product,
    //         products: listproducts
    //     });
    // } else {
    //     res.status(404).send({
    //         message: "Product not found"
    //     });
    // }

    // get data from request
    var id = req.params.id;
    var { name, category, price, currency, stock, tags } = req.body;
    //search current product
    var product = listproducts.filter(function (product) {
        return product.id === id;
    })

    // check if product is found
    if(product.length === 0){
        res.status(404).send({
            isSuccess: false,
            message: "Product not found"
        });
    }
    else{
        //update product
        product[0].name = name;
        product[0].category = category;
        product[0].price = price;
        product[0].currency = currency;
        product[0].stock = stock;
        product[0].tags = tags;
        //send response
        res.status(202).send({
            isSuccess: true,
            message: "Product updated successfully",
            data: product[0],
            products: listproducts
        });
    }
}
function deleteProduct(req, res) {
    // var id = req.params.id;
    // var index = listproducts.findIndex(p => p.id === id);
    // if (index !== -1) {
    //     listproducts.splice(index, 1);
    //     res.status(200).send({
    //         isSuccess: true,
    //         message: "Product deleted successfully",
    //         products: listproducts
    //     });
    // } else {
    //     res.status(404).send({
    //         message: "Product not found"
    //     });
    // }

    var id = req.params.id;
    var product = listproducts.filter(function (product) {
        return product.id === id;
    })
    if(product.length === 0){
        res.status(404).send({
            isSuccess: false,
            message: "Product not found"
        });
    }
    else{
        listproducts.splice(product[0], 1);
        res.status(200).send({
            isSuccess: true,
            message: "Product deleted successfully",
            products: listproducts
        });
    }



    // req query data from request
    // var id = req.params.code;
    // res.status(200).send({
    //     isSuccess: true,
    //     message: "Product deleted successfully",
    //     id
    // });
}

module.exports = {
    getProduct,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};