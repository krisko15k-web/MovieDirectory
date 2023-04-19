const express = require('express')
const movieController = require('../controllers/movieController')

const router = express.Router()

router.get('/movieList', movieController.movieList)
router.post('/movieList', movieController.movieCreate)
router.get('/movieList/:id', movieController.movieInfo)
router.delete('/movieList/:id', movieController.movieDelete)
router.post('/search', movieController.searchMovie)
router.get('/search', movieController.searchPage)

module.exports = router