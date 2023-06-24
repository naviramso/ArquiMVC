const mysql = require("mysql");

class Database {
  private connection;

  constructor() {
    this.connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "arquimvc",
    });

    this.connect();
  }

  private connect() {
    try {
      this.connection.connect();
    } catch (error) {
      console.log(error);
    }
  }

  public close(){
    this.connection.end();
  }

  public query(sql: string, params?: any[]) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, params, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

}

module.exports = Database;