const User = require('../../models/user');
const express = require('express');
const app = express();

app.use(express.json());

module.exports.signUp = async function (req, res) {
  console.log(req.params);
  console.log(req.body);

  try {
   if (req.body.password != req.body.confirm_password) {
     return res.status(400).json({
       statusCode: 400,
       error: 'Bad Request',
       message: 'Password and confirm password do not match',
     });
   }

   const existingUser = await User.findOne({ email: req.body.email }).exec();

   if (existingUser) {
     return res.status(400).json({
       statusCode: 400,
       error: 'Bad Request',
       message: 'User already exists with this email',
     });
   }

   const newUser = await User.create({
     name: req.body.name,
     email: req.body.email,
     password: req.body.password,
   });

   console.log('User created');

   return res.status(200).json({
     statusCode: 200,
     data: {
       user: newUser,
     },
     message: 'User created successfully',
   });
 } catch (err) {
   console.log('Error in sign up:', err);
   return res.status(500).json({
     statusCode: 500,
     error: 'Internal Server Error',
     message: 'Error in sign up',
   });
 }
};

