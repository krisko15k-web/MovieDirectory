const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.listen(8080)

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