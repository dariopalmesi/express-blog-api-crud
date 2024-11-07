
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


    fs.writeFileSync('./db/dbanime.js', `module.exports = ${JSON.stringify(animeList, null, 4)}`)

    return res.status(201).json({
        status: 201,
        data: animeList,
        counter: animeList.length
    })
}

const update = (req, res) => {
    const anime = animeList.find((anime) => anime.id === Number(req.params.id));
    if (!anime) {
        return res.status(404).json({
            error: '404! not found anime id'
        })
    }

    anime.titolo = req.body.titolo,
        anime.genere = req.body.genere,
        anime.anno = req.body.anno,
        anime.episodi = req.body.episodi,

        fs.writeFileSync('./db/dbanime.js', `module.exports = ${JSON.stringify(animeList, null, 4)}`)

    res.status(200).json({
        status: 200,
        data: animeList
    })
}

const destroy = (req, res) => {
    // find the pizza by id
    const anime = animeList.find((anime) => anime.id === Number(req.params.id));


    // check if the user is updating the correct pizza
    if (!anime) {
        return res.status(404).json({
            error: '404! not found anime id'
        })
    }

    // remove the pizza from the menu
    const newanime = animeList.filter((anime) => anime.id !== Number(req.params.id));

    // update the js file
    fs.writeFileSync('./db/dbanime.js', `module.exports = ${JSON.stringify(newanime, null, 4)}`)

    // return the updated menu item
res.status(200).json({
    status: 200,
    data: newanime
})
}
module.exports = {
    index,
    show,
    store,
    update,
    destroy
}