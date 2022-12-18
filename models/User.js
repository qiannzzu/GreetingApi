const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    FirstName:{
        type: String,
    },	
    LastName:{
        type: String,
    },
    Gender:{
        type: String,
    },
    DateOfBirth:{
        type: Date,

    },
    Email:{
        type: String,
    }
})

module.exports = mongoose.model('User', UserSchema)