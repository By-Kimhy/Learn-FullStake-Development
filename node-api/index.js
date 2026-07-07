const express = require("express"); //import express
const app = express();
const PORT = 2800;

// Middleware
app.use(express.json());

// Route
app.get("/", (req, res) => {  //req= request res= response
    res.send("Hello Express!");
});

app.get('/products',(req, res)=>{
    res.send("Hello products")
})

//runing 
app.listen(PORT, () => {
    console.log(`Server is running on http://local:${PORT}`);
});





// //importing the functions from app.js
// const {test,sum}=require('./src/app');

// //calling the test function in traditional way

// // const test = require('./src/app').test;
// // const sum = require('./src/app').sum;

// test(); //output: Test function executed
// console.log(sum(5, 10)); //output: 15