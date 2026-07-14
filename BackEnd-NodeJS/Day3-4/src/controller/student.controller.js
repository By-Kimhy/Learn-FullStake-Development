var listStudents = require('../data/students')
function getStudent(req, res) {
    res.send({
        students: listStudents
    });
}
function getStudentById(req, res) {
    const studentId = parseInt(req.params.id);
    const student = listStudents.find(s => parseInt(s.id) === studentId);
    if(student != null){
        res.send({
        data : student
    });
    }else{
        res.send("Don't have this Student ID")
    }
    //res.send("Get student By Id");
}
function createStudent(req, res) {
    res.send("Create Students!");
}
function updateStudent(req, res) {
    res.send("Update Students!");
}
function deleteStudent(req, res) {
    res.send("Delete Students!");
}
module.exports = { getStudent, getStudentById, createStudent, updateStudent, deleteStudent }
