const express = require('express');
const User = require('../models/User');
const router = express.Router();
const path = require('node:path');
var fs = require('fs');

function getAge(year,v) { // get user age
    var age = year - v.DateOfBirth.getUTCFullYear()
    return age;
}

//Get user in specific date birth
router.get('/getUser', async (req, res) => {
    try {
        const year = new Date().getUTCFullYear(); // testcase '2000-12-22'was 50years old of peter
        const month = new Date().getMonth();
        const day = new Date().getDate();
        const data = await User.find() // all user data
        var birthDayUser = [];
        data.map((v)=>{
            if(v.DateOfBirth.getMonth() === month && v.DateOfBirth.getDate() == day){ //if date,month same => birthday
                var age = getAge(year,v)
                if(age>49){
                    birthDayUser.push(v.FirstName)
                }
            }
        })
        var message = [];
        birthDayUser.map((v)=>{
            message.push(`"title":"Subject: Happy birthday!",
            "content":"Happy birthday, dear ${v}!",
            "picurl":"https://storage.googleapis.com/image_carpool_bucket/birthdayGreeting.jpg"
            `)
        })
        
        res.json(message)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;