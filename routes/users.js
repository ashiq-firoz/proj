var express = require('express');
var router = express.Router();

const {
  addUser,
} = require("../mongo_helper/user_helper");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/signup",(req,res)=>{
  addUser(req.body).then((response)=>{
    if(response!=false){
      res.redirect("/login");
    }
  });
});

module.exports = router;
