const express = require('express');
const User = require('../models/User');
const router = express.Router();


//Get all Method
router.get('/getAllUser', async (req, res) => {
    try {
        const data = await User.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get user in specific date birth
router.get('/getUser', async (req, res) => {
    try {
        const month = new Date().getMonth();//'1985-08-08'
        const day = new Date().getDate();//'1985-08-08'
        const data = await User.find()
        var birthDayUser = [];
        const js = data[0].DateOfBirth
        data.map((v)=>{
            if(v.DateOfBirth.getMonth() === month && v.DateOfBirth.getDate() == day){ //if date,month same => birthday
                birthDayUser.push(v.FirstName)
                
            }
        })
        var birthDayGreet = [];
        birthDayUser.map((v)=>{
            birthDayGreet.push(`Subject: Happy birthday! 
            Happy birthday, dear ${v}!`)
            
        })
        res.json(birthDayGreet)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;