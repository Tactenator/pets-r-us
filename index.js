const express = require ('express')
const mongoose = require('mongoose');
require('dotenv').config({path:__dirname+'/.env'});
const Customer = require('./models/customer')

const PORT = process.env.PORT || 3000; 
const MONGO = process.env.MONGO_URI;

const app = express(); 

app.use(express.json());

app.set('view engine', 'ejs')

app.use(express.static("public"));

app.listen(3000);

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/grooming', (req, res) => {
    res.render('grooming')
})

app.get('/boarding', (req, res) => {
    res.render('boarding')
})

app.get('/training', (req, res) => {
    res.render('training')
})

app.get('/registration', (req, res) => {
    res.render('registration')
})

app.post('/registration', (req, res) => {

    const { customerID, email } = req.body;

    try {
        const customer = Customer.create({ customerID, email })
        res.status(200).json(customer);
        res.render('/');
    }
    catch (error)
    {
        res.status(400).json({ error: error.message })
    }
    
})

mongoose.connect(MONGO)
    .then(() => {
        app.listen(PORT, () => {
            console.log('Port', process.env.PORT);
        })
    })
    .catch((error) => {
        console.log(error);
    })