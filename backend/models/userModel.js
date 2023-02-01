const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    fullname : {
        type : String,
        require : true,
    },
    email : {
        type : String,
        require : true,
        unique : true
    },
    password : {
        type : String,
        require : true 
    },
    address : {
        type : String,
        require : true 
    },
    city : {
        type : String,
        require : true
    },
    state : {
        type : String,
        require : true
    },
    zip : {
        type : Number,
        require : true
    },
    country : {
        type : String,
        require : true 
    },
    isActive :{
        type : Boolean,
        default: false
    },
    activationCode: {
        type : String
    }
},
{
    timestamps: true,
})
module.exports =  mongoose.model('User', userSchema)