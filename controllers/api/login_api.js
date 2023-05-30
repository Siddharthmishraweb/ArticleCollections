
const User = require('../../models/user');
const jwt = require('jsonwebtoken');

module.exports.createSession = async function(req, res){
   try{
      let user = await User.findOne({email: req.body.email});
      if(!user || user.password != req.body.password){
         return res.json(422, {
            statusCode: 422,
            data: null,
            error: 'Invalid Username or Password',
            message: 'Invalid Username or Password',
         })
      }
      return res.json(200, {
         statusCode: 200,
         data: {
           token: jwt.sign(user.toJSON(), 'codial', { expiresIn: '100000' }),
         },
         error: null,
         message: 'Session Created Successfully. Sign In successfully, and here is your token.'
      })
   }catch(err){
      console.log("***** -ERROR- *****", err)
      return res.json(500,{
         statusCode: 500,
         data: null,
         error: 'Internal Server Error',
         message: 'Internal Server Error'
      });
   }
}