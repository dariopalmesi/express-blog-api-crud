const express = require('express')
const router = express.Router()
const postsController = require('../controller/postsController.js')


router.get('/', postsController.index)

 router.get('/:slug', postsController.show)

 router.post('/', postsController.store)

module.exports = router