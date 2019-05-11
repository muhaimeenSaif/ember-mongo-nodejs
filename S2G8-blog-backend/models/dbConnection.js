const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/S2G8-blog',{userNewUrlPaser:true},(err)=>{
  if(!err){console.log('MongoDB Connection Succeeded.')}
  else (console.log('Error in DB connection :'+err))
});
// import models
var posts= require('./posts');
