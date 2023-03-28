const express = require('express')
const mongoose = require('mongoose')
const Movie = require('./models/movie')

const app = express()

mongoose.connect('mongodb://localhost:8080/Movie-Directory')

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('search', { title: 'Search' })
})

app.get('/addMovie', (req, res) => {
    res.render('addMovie', { title: 'Add Movie' })
})

app.get('/movieList', (req, res) => {
    res.render('movieList', { title: 'List' })
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' })
})

app.listen(8080)