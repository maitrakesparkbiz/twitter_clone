const express = require("express");
const { route } = require("express/lib/application");
const db_connection = require("./mysql_routes");
const path = require("path");
const mysql = require('mysql2');
var url = require('url');
fileupload=require('express-fileupload')

let router = express.Router();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'g3_twitter'
});


router.get("/", (req, res) => {
  try {
    res.send("<h3>Twitter Live...</h3>");
  } catch (err) {
    console.log(err.message);
  }
});


router.post("/update_profile", (req, res) => {
  try {
    console.log(req.files.foo);
    console.log(req.body)
    update_userdata="UPDATE `user_master` SET `name`='"+req.body.name+"',`email`='"+req.body.email+"',`phone_no`='"+req.body.phone+"',`bio`='"+req.body.bio+"',`website`='"+req.body.website+"',`birthdate`='"+req.body.dob+"',`location`='"+req.body.location+"',`gender`='"+req.body.gender+"' WHERE id="+req.body.id+""
    console.log(update_userdata);
    connection.query(
      update_userdata,
       function(err, check, fields) {
         console.log(err);
        select_userdata="SELECT * FROM `user_master` WHERE id="+req.body.id+"; "
     
       connection.query(
        select_userdata,
         function(err, results, fields) {
           console.log(results);
           res.render("edit_profile",{results:results})
           
       }
       );


        
         
     }
     );
  } catch (err) {
    console.log(err.message);
  }
});

router.get("/edit_profile", (req, res) => {
  try {

    //let id=req.query.id;
    id=1
    select_userdata="SELECT * FROM `user_master` WHERE id="+id+"; "
    str="";
   connection.query(
    select_userdata,
     function(err, results, fields) {
       console.log(results);
       res.render("edit_profile",{results:results})
       
   }
   );
    
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

