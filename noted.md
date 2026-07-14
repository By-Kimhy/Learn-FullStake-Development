- init project
    cmd : npm init -y
- install  express
    cmd : npm install express
- create index.js
- create package.json
- run server
    cmd : node index.js


plug in nodemon
- install nodemon
    cmd : npm install -g nodemon
change in package.json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "nodemon index.js"
}


(req,res)

req parameter
    there are 3 types of request parameters:
    1- req.query - This is an object containing the parameters passed in the query string
    2- req.params - This is an object containing the parameters passed in the route path
    3- req.body - This is an object containing the parameters passed in the request 

res parameter
    res.send(data) - This is used to send data to the client
    res.json(data) - This is used to send data to the client in json format
    res.status(statusCode) - This is used to set the status code of the response
    res.end() - This is used to end the response