const user = require("../model/user");

const userController = {
    getUsers: () => {
        return user.getUsers();
    },
    getUser: (id) => {
        return user.getUser(id);
    },
    createUser: (name, email, password) => {
        return user.createUser(name, email, password);
    },
    updateUser: (id, name, email, password) => {
        return user.updateUser(id, name, email, password);
    },
    deleteUser: (id) => {
        return user.deleteUser(id);
    }
}


module.exports = userController