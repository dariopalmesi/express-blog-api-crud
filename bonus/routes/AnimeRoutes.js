const express = require('express')
const router = express.Router()
const AnimeController = require('../controller/AnimeController.js')


router.get('/', AnimeController.index)

router.get('/:id', AnimeController.show)

router.post('/', AnimeController.store)

module.exports = router