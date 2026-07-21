var listUsers = require('../data/users');
function getUser(req, res) {
    res.send({
        users: listUsers
    });
}

function getUserById(req, res) {
    const id = req.params.id;
    const user = listUsers.find(function (user) {
        return user.id === id;
    });
    if (user) {
        res.send({
            user: user
        });
    } else {
        res.status(404).send({
            message: "User not found"
        });
    }
}
function createUser(req, res) {
    const user = req.body;
    // Safely calculate next ID
    const userId = listUsers.length > 0
        ? Math.max(...listUsers.map(u => u.id)) + 1
        : 1;
    const newObject = {
        id: userId,
        username: user.username,
        email: user.email,
        password: user.password,
        role: user.role,
        isActive: user.isActive
    }
    listUsers.push(newObject);

    res.send({
        isSuccess: true,
        message: "User created successfully",
        data: newObject,
        users: listUsers
    });
}
function updateUser(req, res) {
    const id = req.params.id;
    const { username, email, password, role, isActive } = req.body;
    const userIndex = listUsers.findIndex(function (user) {
        return user.id === id;
    });
    if (userIndex !== -1) {
        listUsers[userIndex].username = username;
        listUsers[userIndex].email = email;
        listUsers[userIndex].password = password;
        listUsers[userIndex].role = role;
        listUsers[userIndex].isActive = isActive;
        res.status(202).send({
            isSuccess: true,
            message: "User updated successfully",
            data: listUsers[userIndex],
            users: listUsers
        });
    }
}
function deleteUser(req, res) {
    const id = req.params.id;
    const UerIndex = listUsers.findIndex(function (user) {
        return user.id === id;
    });
    if (UerIndex === -1) {
        res.status(404).send({
            isSuccess: false,
            message: "User not found"
        });
    } else {
        listUsers.splice(UerIndex, 1);
        res.status(200).send({
            isSuccess: true,
            message: "User deleted successfully",
            users: listUsers
        });
    }
}

module.exports = {getUser,getUserById,createUser,updateUser,deleteUser};
