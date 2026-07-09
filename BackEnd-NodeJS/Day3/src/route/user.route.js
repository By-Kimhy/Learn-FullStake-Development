var userController=require('../controller/user.controller');

function userRoute(app) {
    
    app.get('/api/v1/users', userController.getUser)
    app.get('/api/v1/users/get', userController.listUser)
    app.get('/api/v1/users/create', userController.createUser)
    app.get('/api/v1/users/Update', userController.updateUser)
    app.get('/api/v1/users/Delete', userController.deleteUser)
    app.get('/api/v1/users/process', userController.processUser)
}

//export product route
module.exports = userRoute;

