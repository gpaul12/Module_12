const express = require("express");
const app = express();

const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "12345",
    database: "movies_db",
  },
  console.log(`Connected to the movies_db database.`)
);

app.get("/api/movies", (req, res) => {
  let sql = "SELECT * FROM movies";

  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Movies Listed");
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
