const animeList = require('../db/dbanime.js')
const fs = require('fs')

const index = (req, res) => {
    res.json({
        data: animeList,
        counter: animeList.length
    })
}

const show = (req, res) => {
    const anime = animeList.find((anime) => anime.id === Number(req.params.id))
    if (!anime) {
        return res.status(404).json({
            error: '404! Not found anime id'
        })
    }
    return res.status(200).json({
        data: animeList
    })
}

const store = (req, res) => {
    const anime = {
        id: Number(animeList[animeList.length - 1].id + 1),
        titolo: req.body.titolo,
        genere: req.body.genere,
        anno: req.body.anno,
        episodi: req.body.episodi

    }
    animeList.push(anime)

    return res.status(201).json({
        status: 201,
        data: animeList,
        counter: animeList.length
    })
}

module.exports = {
    index,
    show,
    store
}