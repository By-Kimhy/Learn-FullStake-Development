// require express
var express = require('express');
var app = express();

//import route product
var productRoute=require('./src/route/product.route');
productRoute(app);
//import route user
var userRoute=require('./src/route/user.route');
userRoute(app);

// import route student (HomeWork)
var studentRoute=require('./src/route/student.route');
studentRoute(app);

// runcode server
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
})