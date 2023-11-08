var express = require('express');
var router = express.Router();
const { spawn } = require('child_process');
const axios = require('axios');
const {PythonShell} =require('python-shell');
const fs = require('fs');


const {
  verifyUser,
  addUser,
} = require("../mongo_helper/user_helper"); 

const {
  getpatients,
  addData,
  getpatient
} = require("../mongo_helper/patient_helper");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get("/predict", async (req, res) => {
  const symptoms = req.query.symptoms; // Get symptoms from query parameters
  
  let options = {
    mode: 'text',
    args: [symptoms]
  };
  console.log(symptoms);
  PythonShell.run('public/MLModel/connector.py', options, function (err, result){
    if (err) throw err;
    console.log('result: ', result.toString());
    //res.send(result.toString());
});

  res.redirect("/output");

});

router.get("/output",(req,res)=>{
  const filePath = 'hello.txt';

  const content = fs.readFileSync(filePath, 'utf8');

  console.log(content);
  res.json({data:content});
});

router.post("/login",(req,res)=>{
  verifyUser(req.body).then((response)=>{
    if(response!=false){
      // req.session.user = response._id;
			//req.session.login = true;
      res.json({status : true});
    }
    else{
      res.json({status:false});
    }
  });
});

router.get("/dashboard",(req,res)=>{

});

router.post("/add",(req,res)=>{
  console.log(req.body);
  addData(req.body).then((response)=>{
    if(response==null){
      res.json({status:false});
    }
    else{
      res.json({status:true,data:response});
    }
  });
  res.json({status:false});
});

router.get("/patients",(req,res)=>{
  getpatients().then((response)=>{
    if(response!=false){
      res.json({status:true,data:response});
    }
    else{
      res.json({status:false});
    }
  });
});

router.get("/getpatient",(req,res)=>{
  getpatient(req.body['id']).then((response)=>{
    if(response!=false){
      res.json({status:true,data:response});
    }
    else{
      res.json({status:false});
    }
  });
});




router.get("/patients",(req,res)=>{

});



module.exports = router;
