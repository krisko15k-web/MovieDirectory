const express = require('express')
const movieListController = require('../controllers/movieListController')

const router = express.Router()

router.get('/', movieListController.movie_list)
router.post('/', movieListController.movie_create_post)
router.get('/:id', movieListController.movie_info_get)
router.delete('/:id', movieListController.movie_delete)

module.exports = router