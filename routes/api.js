const express = require('express');
const User = require('../models/users');
const router = express.Router();

//Routes for all users
router.get('/users',async(req,res)=>{
    try{
        const users = await User.find()
        res.json(users)
    }catch{
        res.status(500).send("Server error")
    }
})

//Routes for creating one user
router.post('/users',async(req,res)=>{
    const user = new User({
        name : req.body.name,
        age : req.body.age,
    })
    try{
        const newUser = await user.save();
        //201 -> Stands for new user object is created
        res.status(201).json(newUser)
    }
    catch(e){
        res.status(400).send("Error Occured,Data is not saved in DB",e)
    }
})

//Updating one user by ID
router.patch('/update/:id',getUsers,async (req,res)=>{
    if(req.body.name != null){
        req.user.name = req.body.name
    }
    if(req.body.age != null){
        req.user.age = req.body.age
    }
    
    try{
        const updatedUser = await user.save();
        res.json(updatedUser)
    }
    catch(err){
        res.status(400).json({message:"err.message"})
    }
})

//Deleting one with the particular ID
router.delete('/delete/:id',getUsers ,async (req,res)=>{
    try{
        await res.user.remove()
        res.json({message: "Successfully Deleted"})
    }
    catch(error){
        res.status(500).send({message: "error.message"})
    }
})

async function getUsers(req,res,next){
    let user
    try{
        user = await User.findById(req.params.id)
        if(user == null){
            return res.status(404).json("Can't find")
        }
    }
    catch(e){
        res.status(400).json({message : "e.message"})
    }
    res.user = user
    next()
}


module.exports = router


