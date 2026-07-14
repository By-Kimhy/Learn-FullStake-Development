var listTeachers = require('../data/teachers')
function getTeacher(req, res) {
    res.send({
        teachers: listTeachers
    });
}
function getTeacherById(req, res) {
    const TeacherId = parseInt(req.params.id);
    const teacher = listTeachers.find(s => parseInt(s.id) === TeacherId);
    if(teacher != null){
        res.send({
        data : teacher
    });
    }else{
        res.send("Don't have this Teacher ID")
    }
}
function createTeacher(req, res) {
    res.send("Create Teachers!");
}
function updateTeacher(req, res) {
    res.send("Update Teachers!");
}
function deleteTeacher(req, res) {
    res.send("Delete Teachers!");
}
module.exports = { getTeacher, getTeacherById, createTeacher, updateTeacher, deleteTeacher }
