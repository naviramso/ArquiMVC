class User {
    constructor(name, email, password, id = 0) { 
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

class UserRepository {
    getUser(id) {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM user WHERE id = ?", [id]).then((data) => {
                const User = new User(data[0].id, data[0].name, data[0].email, data[0].password);
                resolve(User);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    getUsers() {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM user").then((data) => {
                const Users = [];
                data.map((d) => {
                    const User = new User(d.id, d.name, d.email, d.password);
                    Users.push(User);
                })
                resolve(Users);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    createUser(name, email, password) {
        return new Promise((resolve, reject) => {
            db.query("INSERT INTO user (name, email, password) VALUES (?, ?, ?)", [name, email, password]).then((data) => {
                resolve(data);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    updateUser(id, name, email, password) {
        return new Promise((resolve, reject) => {
            db.query("UPDATE user SET name = ?, email = ?, password = ? WHERE id = ?", [name, email, password, id]).then((data) => {
                resolve(data);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    deleteUser(id) {
        return new Promise((resolve, reject) => {
            db.query("DELETE FROM user WHERE id = ?", [id]).then((data) => {
                resolve(data);
            }).catch((err) => {
                reject(err);
            });
        });
    }
}
module.exports = { UserRepository, User };