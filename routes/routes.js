const express = require('express');
const User = require('../models/User');
const router = express.Router();

function getBirthState(userName,gender) {
    if(gender === 'Male'){
        return(`Subject: Happy birthday!
        Happy birthday, dear ${userName}!
        We offer special discount 20% off for the following items:
        White Wine, iPhone X
        `)
    }else if(gender === 'Female'){
        return(`Subject: Happy birthday!
        Happy birthday, dear ${userName}!
        We offer special discount 50% off for the following items:
        Cosmetic, LV Handbags
        `)
    }else{ //gender cannot be determine
        return 0;
    }
}

//Get user in specific date birth
router.get('/getUser', async (req, res) => {
    try {
        const month = new Date().getMonth();//'1985-08-08'
        const day = new Date().getDate();//'1985-08-08'
        const data = await User.find()
        var birthDayUser = [];
        data.map((v)=>{
            if(v.DateOfBirth.getMonth() === month && v.DateOfBirth.getDate() == day){ //if date,month same => birthday
                var message = getBirthState( v.FirstName,v.Gender)
                if(message != 0){birthDayUser.push(message)} //have message then push
            }
        })
        res.json(birthDayUser)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;