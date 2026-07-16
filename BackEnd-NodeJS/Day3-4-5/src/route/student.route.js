var studentController=require('../controller/student.controller');

function studentRoute(app) {
    
    app.get('/api/v1/students/get', studentController.getStudent)
    app.get('/api/v1/students/create', studentController.createStudent)
    app.get('/api/v1/students/Update', studentController.updateStudent)
    app.get('/api/v1/students/Delete', studentController.deleteStudent)
    app.get('/api/v1/students/:id', studentController.getStudentById)
}

//export product route
module.exports = studentRoute;