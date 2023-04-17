const express = require ('express')

const app = express(); 

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