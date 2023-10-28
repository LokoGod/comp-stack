import mysql from "mysql";

const db = mysql.createConnection({
  host: "127.0.0.1",
  port: 3308,
  user: "root",
  password: "root",
  database: "comp_stack",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected to DB!");
});

export default db;
