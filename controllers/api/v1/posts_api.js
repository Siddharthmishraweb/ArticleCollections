const Post = require('../../../models/post');
const Comment = require('../../../models/comment');
module.exports.index = async function(req, res){
   let posts = await Post.find({})
   .sort('-createdAt')
   .populate('user')
   .populate({
     path:'comments',
     populate:{
       path: 'user'
     }
   });

   return res.json(200,{
      message: "Lists of post",
      posts: posts
   })
}
 
module.exports.destroy = async function(req, res){
   try{
      let post = await Post.findById(req.params.id);
      // console.log('User is ********* ', req.user.id)
      if(post.user == req.user.id){
         await post.deleteOne();
         await Comment.deleteMany({post:req.params.id});
         return res.json(200, {
            message: "Post and associated comments are deleted successfully!"
         });
      }else{
         return res.json(401 , {
            message: 'You cannot delete this post'
         })
      }
   }catch(err){
      console.log("***** -ERROR- *****", err)
      return res.json(500,{
         message: 'Internal Server Error: post_api.js'
      });
   }
}
