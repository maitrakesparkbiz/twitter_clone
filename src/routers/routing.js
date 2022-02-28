const express = require("express");
const { route } = require("express/lib/application");
const db_connection = require("./mysql_routes");
let router = express.Router();

router.get("/", (req, res) => {
  try {
    res.send("<h3>Twitter Live...</h3>");
  } catch (err) {
    console.log(err.message);
  }
});


module.exports=router;

// using execute query function
// execute_query(applicant_query)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

