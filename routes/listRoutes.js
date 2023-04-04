const express = require('express')
const listController = require('../controllers/listController')

const router = express.Router()

router.get('/', listController.movieList)
router.post('/', listController.movieCreate)
router.get('/:id', listController.movieInfo)
router.delete('/:id', listController.movieDelete)

module.exports = router