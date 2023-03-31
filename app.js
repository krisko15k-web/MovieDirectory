const express = require('express')
const mongoose = require('mongoose')
const Movie = require('./models/movie')

const app = express()

mongoose.connect('mongodb+srv://Kris_Parzulov:9909237944kK@moviedirectory.stwojns.mongodb.net/Movie-Directory?retryWrites=true&w=majority')
    .then((result) => app.listen(8080))
    .catch((err) => console.log(err))

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('search', { title: 'Search' })
})

app.get('/addMovie', (req, res) => {
    res.render('addMovie', { title: 'Add Movie' })
})

app.get('/movieList', (req, res) => {
    Movie.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('movieList', { title: 'List', movies: result })
        })
        .catch((err) => {
            console.log(err)
        })
})

app.post('/movieList', (req, res) => {
    const movie = new Movie(req.body)

    movie.save()
        .then((result) => {
            res.redirect('/movieList')
        })
        .catch((err) => {
            console.log(err)
        })
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' })
})
