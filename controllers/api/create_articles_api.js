// const Post = require('../../models/post');
// const Comment = require('../../models/comment');

// module.exports.create = async function (req, res) {
//   try {
//     let post = await Post.create({
//       content: req.body.content,
//       user: req.user._id,
//     });
//     if (req.xhr) {
//       return res.status(200).json({
//         statusCode: 200,
//         data: {
//           post: post,
//         },
//         message: 'Post Created!',
//       });
//     }
//     req.flash('success', 'Post Created!');
//     return res.redirect('back');
//   } catch (err) {
//     console.log('Error in creating the post', err);
//     return res.status(500).json({
//       statusCode: 500,
//       data: null,
//       error: 'Internal Server Error',
//       message: 'Error in creating the post',
//     });
//   }
// };


const Post = require('../../models/post');
const Comment = require('../../models/comment');

module.exports.create = async function (req, res) {
   console.log("&&&&&&&&&&&&&&&&&&&&&",  req.params);
   console.log("&&&&&&&&&&&&&&&&&&&&& body ", req.body);
  try {
    let post = await Post.create({
      content:req.body.content,
      user: req.params.userId, // Use userId from the request parameters
    });
    return res.status(200).json({
      statusCode: 200,
      data: {
        post: post,
      },
      message: 'Post Created!',
    });
  } catch (err) {
    console.log('Error in creating the post', err);
    return res.status(500).json({
      statusCode: 500,
      data: null,
      error: 'Internal Server Error',
      message: 'Error in creating the post',
    });
  }
};
