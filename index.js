const express = require ('express')
const mongoose = require('mongoose');
require('dotenv').config({path:__dirname+'/.env'});
const Customer = require('./models/customer')
const morgan = require('morgan');
const cors = require('cors')


const PORT = process.env.PORT || 3000; 
const MONGO = process.env.MONGO_URI;

const app = express(); 

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });

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

app.get('/customers', (req, res) => {
    res.render('customers')
})

app.post('/customers', async (req, res) => {

    const { customerID, email } = req.body; 

    try{
        const customer =  await Customer.create({ customerID, email })
        res.status(200).json(customer);
    }
    catch (error) {
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