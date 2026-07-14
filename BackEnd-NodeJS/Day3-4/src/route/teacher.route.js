var teacherController=require('../controller/teacher.controller');

function teacherRoute(app) {
    
    app.get('/api/v1/teacher/getAllTeacher', teacherController.getStudent)
    app.get('/api/v1/teacher/getTeacherById/:id', teacherController.getStudentById)
    app.get('/api/v1/teacher/createTeacher', teacherController.createStudent)
    app.get('/api/v1/teacher/updateteacher/:id', teacherController.updateStudent)
    app.get('/api/v1/teacher/deleteteachers/:id', teacherController.deleteStudent)
    
}

//export product route
module.exports = teacherRoute;