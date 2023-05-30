const { response } = require('express');
const Comment = require('../models/comment');
const Post = require('../models/post');
const User = require('../models/user');
const commentsMailer = require('../mailers/comments_mailer');
module.exports.create = async function(req, res) {
   try{
      let post = await Post.findById(req.body.post);

      if(post){
         let comment = await Comment.create({
            content: req.body.content,
            post: req.body.post,
            user: req.user._id
         })
         req.flash('success', "Comment Added!");
         post.comments.push(comment);
         post.save();
         comment = await Comment.populate(comment, { path: 'user', select: 'name email' });
         commentsMailer.newComment(comment);
         res.redirect('/');
      }
   }catch(err){
      req.flash('error', "Comment not Added!");
     console.log("Error: ", err);
     return;
   }
}

module.exports.destroy = async function(req, res) {
   try {
     const comment = await Comment.findById(req.params.id);
     
     if (comment.user == req.user.id) {
       let postId = comment.post;
       await Comment.findByIdAndDelete(req.params.id);
       req.flash('success', "Comment Deleted!");
       await Post.findByIdAndUpdate(postId, { $pull: { comments: req.params.id } });
       return res.redirect('back');
     } else {
       return res.redirect('back');
     }
   } catch (err) {
     req.flash('error', "Comment not deleted!");
     console.error(err);
     return res.redirect('back');
   }
 }
 
 