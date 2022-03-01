const express = require("express");
const app=express();
const fileUpload=require("express-fileupload")
const { route } = require("express/lib/application");
const db_connection = require("./mysql_routes");
const path = require("path");
const mysql = require('mysql2');
var url = require('url');


let router = express.Router();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'g3_twitter'
});

router.use(fileUpload())

router.use(express.static(path.join(__dirname,"/public")))

router.get("/", (req, res) => {
  try {
    res.send("<h3>Twitter Live...</h3>");
  } catch (err) {
    console.log(err.message);
  }
});


router.post("/update_profile", (req, res) => {
  try {
  
    console.log('req.files >>>', req.files.file);
    let myfile=req.files.file;
    uploadPath ='/home/maitrak/Downloads/G3-Twitter/public/profile_photo/' + myfile.name;
    console.log(uploadPath);
    myfile.mv(uploadPath)
    

//bg

    console.log('req.files >>>', req.files.file1);
    let myfile1=req.files.file1;
    uploadPath1 ='/home/maitrak/Downloads/G3-Twitter/public/backgroup_photo/' + myfile1.name;
    console.log(uploadPath1);
    myfile1.mv(uploadPath1)

    
    console.log(req.body)
    update_userdata="UPDATE `user_master` SET `name`='"+req.body.name+"',`email`='"+req.body.email+"',`phone_no`='"+req.body.phone+"',`bio`='"+req.body.bio+"',`website`='"+req.body.website+"',`birthdate`='"+req.body.dob+"',`location`='"+req.body.location+"',`gender`='"+req.body.gender+"',`profile_image`='"+myfile.name+"',`background_image`='"+myfile1.name+"' WHERE id="+req.body.id+""
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

