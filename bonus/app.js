const express = require('express') 
const app = express()
const anime = require('./db/dbanime.js')



const PORT = process.env.PORT
const HOST = process.env.HOST

app.listen(3001, () => {
    console.log(`Server started on ${HOST}:${PORT}`);
    
})


