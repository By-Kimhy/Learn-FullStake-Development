const {getTeacher,getTeacherById,createTeacher,updateTeacher,deleteTeacher}=require('../controller/teacher.controller');

const teacherRoute=(app)=> {
    // get all teachers
    app.get('/api/v1/teacher/getAllTeacher', getTeacher)
    // get a teacher by id
    app.get('/api/v1/teacher/getTeacherById/:id', getTeacherById)
    // create a teacher
    app.post('/api/v1/teacher/createTeacher', createTeacher)
    // update a teacher
    app.put('/api/v1/teacher/updateteacher/:id', updateTeacher)
    // delete a teacher
    app.delete('/api/v1/teacher/deleteteacher/:id', deleteTeacher)
}

//export product route
module.exports = teacherRoute;