const db = require("./baseDeDatos");
class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

const getUser = async () => {
    return await db.query("SELECT * FROM users");
}

const createUser = async (name, email, password) => {
    return await db.query("INSERT INTO users (nombre, email, password) VALUES (?, ?, ?)", [name, email, password]);
}

const deleteUser = async (id) => {
    return await db.query("DELETE FROM users WHERE id = ?", [id]);
}

const updateUser = async (id, name, email, password) => {
    return await db.query("UPDATE users SET nombre = ?, email = ?, password = ? WHERE id = ?", [name, email, password, id]);
}

module.exports = user;