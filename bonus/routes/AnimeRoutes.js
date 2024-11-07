const express = require('express')
const router = express.Router()
const AnimeController = require('../controller/AnimeController.js')


router.get('/', AnimeController.index)

router.get('/:id', AnimeController.show)

router.post('/', AnimeController.store)

router.put('/:id', AnimeController.update)

router.delete('/:id', AnimeController.destroy)

module.exports = router