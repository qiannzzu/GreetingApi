const express = require('express');
const User = require('../models/User');
const router = express.Router();

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
                birthDayUser.push(v)
                
            }
        })
        var birthDayGreet = [];
        birthDayUser.map((v)=>{
            birthDayGreet.push(`<root><title>Subject: Happy birthday!</title><content>Happy birthday, dear ${v.FirstName}!</content></root>`)
            
        })
        res.json(birthDayGreet)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;