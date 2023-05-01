const mongoose = require('mongoose');

let appointmentSchema = new mongoose.Schema({
    "userName":
    { 
        type: String,  
        unique: true 
    },
    "firstName": 
    {
        type: String, 
        required: true
    },
    "lastName": 
    {
        type: String, 
        required: true
    },
    "email": 
    {
        type: String, 
        required: true,
        unique: true
    },
    "service": 
    {
        type: String, 
        required: true
    }
});

module.exports = mongoose.model('Appointment', appointmentSchema);