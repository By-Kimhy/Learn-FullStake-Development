const {getTeacher,getTeacherById,createTeacher,updateTeacher,deleteTeacher}=require('../controller/teacher.controller');

const teacherRoute=(app)=> {
    
    app.get('/api/v1/teacher/getAllTeacher', getTeacher)
    app.get('/api/v1/teacher/getTeacherById/:id', getTeacherById)
    app.post('/api/v1/teacher/createTeacher', createTeacher);
    app.put('/api/v1/teacher/updateteacher/:id', updateTeacher)
    app.delete('/api/v1/teacher/deleteteachers/:id', deleteTeacher)
}

//export product route
module.exports = teacherRoute;