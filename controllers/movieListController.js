const Movie = require('../models/movie')

const movie_list = (req, res) => {
    Movie.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('movieList', { title: 'List', movies: result })
        })
        .catch((err) => {
            console.log(err)
        })
}

const movie_create_post = (req, res) => {
    const movie = new Movie(req.body)

    movie.save()
        .then((result) => {
            res.redirect('/movieList')
        })
        .catch((err) => {
            console.log(err)
        })
}

const movie_info_get = (req, res) => {
    const id = req.params.id
    Movie.findById(id)
        .then(result => {
            res.render('movieInfo', { title: 'Info', movie: result })
        })
        .catch((err) => {
            console.log(err)
        })
}

const movie_delete = (req, res) => {
    const id = req.params.id

    Movie.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/movieList' })
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = {
    movie_list,
    movie_create_post,
    movie_info_get,
    movie_delete
}