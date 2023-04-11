const Movie = require('../models/movie')

const errHandler = (res) => {
    return (err) => {
        console.log(err)
        res.status(404).render('404', { title: '404' })
    }
}

const movieList = async (req, res) => {
    try {
        const result = await Movie.find().sort({ createdAt: -1 })
        res.render('movies/movieList', { title: 'List', movies: result })
    } catch { errHandler(res) }
}

const movieCreate = async (req, res) => {
    const movie = new Movie(req.body)

    try {
        const result = await movie.save()
        res.redirect('/movieList')
    } catch { errHandler(res) }
}

const movieInfo = async (req, res) => {
    const id = req.params.id
    try {
        const result = await Movie.findById(id)
        res.render('movies/movieInfo', { title: 'Info', movie: result })
    } catch { errHandler(res) }
}

const movieDelete = async (req, res) => {
    const id = req.params.id
    try {
        const result = await Movie.findByIdAndDelete(id)
        res.json({ redirect: '/movieList' })
    } catch { errHandler(res) }
}

module.exports = {
    movieList,
    movieCreate,
    movieInfo,
    movieDelete
}