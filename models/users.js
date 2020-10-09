const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        maxlength:250,
        minlength:5,
        required:true,
    },
    age:{
        type:String,
        maxlength:3,
        minlength:1,
        required:true
    }
})

const User = mongoose.model('User',userSchema);

module.exports = User