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