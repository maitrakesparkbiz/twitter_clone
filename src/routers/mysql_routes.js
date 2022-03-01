const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "g3_twitter",
});

connection.connect((err) => {
  if (err) console.log(err.message);
  else console.log("MySQL server connected.");
});

module.exports = execute_query = (query) => {
  return new Promise((resolve, reject) => {
    connection.query(query, (error, result) => {
      if (error) {
        console.log("Error in query: ");
        console.log(query);
        console.log(error.message);
        return reject(error);
      }
      return resolve(result);
    });
  });
};
