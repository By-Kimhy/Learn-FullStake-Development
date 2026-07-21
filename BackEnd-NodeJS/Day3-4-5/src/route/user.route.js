var userController=require('../controller/user.controller');

function userRoute(app) {
    app.get('/api/v1/users/getAll', userController.getUser)
    app.get('/api/v1/users/getUser/:id', userController.getUserById)
    app.post('/api/v1/users/createUser', userController.createUser)
    app.post('/api/v1/users/login', userController.loginUser)
    app.put('/api/v1/users/updateUser/:id', userController.updateUser)
    app.delete('/api/v1/users/deleteUser/:id', userController.deleteUser)
}

//export product route
module.exports = userRoute;

