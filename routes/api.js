const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/user',(req,res,next)=>{
    const { name,email,mobile,certino }= req.body;
    const newUser= new User({
            name,email,mobile,certino
        });
        newUser.save().then((person)=>{
            res.send(person);
        }).catch(next);
    res.send(newUser);  
});

module.exports = router;