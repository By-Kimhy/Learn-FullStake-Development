var listTeachers = require('../data/teachers')
function getTeacher(req, res) {
    res.send({
        teachers: listTeachers
    });
}
function getTeacherById(req, res) {
    const TeacherId = parseInt(req.params.id);
    const teacher = listTeachers.find(s => parseInt(s.id) === TeacherId);
    if (teacher != null) {
        res.send({
            data: teacher
        });
    } else {
        res.send("Teacher not found")
    }
}


function createTeacher(req, res) {
    var newObject = {
        id: listTeachers.length + 1,
        name: "Vuthy Seng",
        subject: "Physics",
        experience_years: 12,
        email: "vuthy.seng@school.edu"
    }
    listTeachers.push(newObject);

    res.send({
        isSuccess: true,
        message: "Teacher created successfully",
        teachers: listTeachers,
    })
}


function updateTeacher(req, res) {
    const teacher = listTeachers.find(t => t.id == req.params.id);
    if (teacher) {
        Object.assign(teacher, req.body);
        res.json(teacher);
    } else {
        res.status(404).send("Teacher not found");
    }
}
function deleteTeacher(req, res) {
    const index = listTeachers.findIndex(t => t.id == req.params.id);
    if (index !== -1) {
        listTeachers.splice(index, 1);
        res.status(204).send("Teacher deleted successfully");
    } else {
        res.status(404).send("Teacher not found");
    }
}

module.exports = { getTeacher, getTeacherById, createTeacher, updateTeacher, deleteTeacher }
