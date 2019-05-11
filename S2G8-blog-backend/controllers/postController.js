const express = require('express');
// Get an instance of the Express router and start dealing with routes.
var router = express.Router();

var Posts = require('../models/posts');

// Crud Operation For Post
  router.route('/')
  .post(function(request,response){
    var post=new Posts.Model(request.body.post);
    post.save(function(error){
      if(error) {
        response.send(error);
      }
      else
      {
        response.json({post:post});
      }

    });
  })
  .get(function(request,response){
    Posts.Model.find(function(error,posts){
      if(error) response.send(error);
      response.json({post:posts});
    });

      //response.json('testing');
  });

router.route('/:post_id')
  .get(function(request,response){
    Posts.Model.findById(request.params.post_id,function(error,post){
      if(error){
        response.send({error:error});
      }
      else{
        response.json({post:posts});
      }
    });

  })
  .put(function(request,response){
    Posts.Model.findById(request.params.post_id,function(error,post){
      if(error){
        response.send({error:error});
      }
      else{
        post.title=request.body.post.title;
        post.body=request.body.post.body;
        post.save(function(error){
          if(error){
            response.send({error:error});
          }
          else{
            response.json({post:posts});
          }
        });
      }
    });
  })
  .delete(function(request,response){
    Posts.Model.findOneAndDelete({_id:request.params.post_id},function(error,deleted){
      if(!error){
        response.json({post:deleted});
      }
    });
  });
module.exports=router;
