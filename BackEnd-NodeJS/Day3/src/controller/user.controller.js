function getUser(req, res) {
    res.send("Hello Users!");
}

function listUser(req, res) {
    res.send("Listing Users!");
}
function createUser(req, res) {
    res.send("Create Users!");
}
function updateUser(req, res) {
    res.send("Update Users!");
}
function deleteUser(req, res) {
    res.send("Delete Users!");
}
function processUser(req, res) {
    res.send("Process Users!");
}

module.exports = {getUser,listUser,createUser,updateUser,deleteUser,processUser}
