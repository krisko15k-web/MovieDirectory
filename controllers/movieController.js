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
    const id = req.params.id
    try {
        await movie.save()
        await Movie.findById(id)
        res.redirect('/movieList/' + movie._id)
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

const searchMovie = async (req, res) => {
    try {
        let searchTerm = req.body.searchTerm
        const result = await Movie.find({ $text: { $search: searchTerm, $diacriticSensitive: true } })
        res.render('search', { title: 'Search', result })
    } catch { errHandler(res) }
}

const searchPage = async (req, res) => {
    try {
        const result = await Movie.find().sort({ createdAt: -1 }).limit(5)
        res.render('search', { title: 'Search', movies: result })
    } catch { errHandler(res) }
}

module.exports = {
    movieList,
    movieCreate,
    movieInfo,
    movieDelete,
    searchMovie,
    searchPage
}