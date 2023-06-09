const mongoose = require('mongoose');

let customerSchema = new mongoose.Schema({
    "customerID":
    { 
        type: String, 
        required: true, 
        unique: true 
    },
    "email": 
    {
        type: String, 
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('Customer', customerSchema);