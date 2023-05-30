const Post = require('../../models/post');
const Comment = require('../../models/comment');
module.exports.index = async function (req, res) {
   try {
     const posts = await Post.find({})
       .sort('-createdAt')
       .populate('user')
       .populate({
         path: 'comments',
         populate: {
           path: 'user'
         }
       });
 
     return res.status(200).json({
       statusCode: 200,
       data: {
         articles: posts
       },
       message: 'List of all articles'
     });
   } catch (err) {
     console.log('Error', err);
     return res.status(500).json({
       statusCode: 500,
       message: 'Internal Server Error'
     });
   }
 };
module.exports.destroy = async function(req, res){
   try{
      let post = await Post.findById(req.params.id);
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
