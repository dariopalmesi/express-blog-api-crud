const express = require('express') 
const app = express()
const anime = require('./db/dbanime.js')



const PORT = process.env.PORT
const HOST = process.env.HOST

app.listen(3001, () => {
    console.log(`Server started on ${HOST}:${PORT}`);
    
})

app.get('/', (req, res) => {
    res.send('Blog anime')
})

app.get('/anime', (req, res) => {
    res.json({
        data: anime,
        counter: anime.length
    })
})

