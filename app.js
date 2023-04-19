require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const movieRoutes = require('./routes/movieRoutes')

const app = express()

const startServer = async (res) => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_URL)
        app.listen(8080)
    } catch (err) {
        console.log(err)
        res.status(404).render('404', { title: '404' })
    }
}
startServer()

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.redirect('/search')
})

app.use('/', movieRoutes)

app.get('/addMovie', (req, res) => {
    res.render('movies/addMovie', { title: 'Add Movie' })
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' })
})

app.use((req, res) => {
    res.status(404).render('404', { title: '404' })
})