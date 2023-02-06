const { text } = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')









const registerUser = asyncHandler(async(req,res)=>{

  // methode pour creer une chaine e characteres aleatoire!
  const characteres = "0123456789abcdefjhigklmnopqrstuvwxyzABCDEFJHIGKLMNOPQRSTUVWYZ";
  let activationCode = "";
  for(let i = 0; i < 25; i++){
    activationCode  += characteres[Math.floor(Math.random() * characteres.length)]
  }
    const {userName, email, password} = req.body
    if(!userName || !email || !password ){
    res.status(400) 
    throw new Error('Please add all fields')
    }
    
    const userExists = await User.findOne({email});
    if(userExists){
        throw new Error('User already exists')
    } 
    //  salt is a random string that makes the hash unpredictable
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash( password, salt);
    const user = await User.create({
      userName,
        email,
        password: hashedPassword, 
      
    })
    if(user){
        res.status(201).json({
        _id : user.id,
        userName : userName,
        email : email})
       } else{
    res.status(400) 
    throw new Error('Invalid user data');
    }
   
    
})

const loginUser = asyncHandler(async (req, res) => {
    const  email= req.body.email
    const password = req.body.password
    const user = await User.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        user:user.role,
        token: generateToken(user._id),
      })
    } else {
      res.status(400)
      console.log('Erour')
     
    }
  })


// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, "abc123", {
      expiresIn: '1d',
    })
  }

module.exports = {loginUser, registerUser}