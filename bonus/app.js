const express = require('express') 
const app = express()
const AnimeRoutes = require('./routes/AnimeRoutes.js')



const PORT = process.env.PORT
const HOST = process.env.HOST

app.listen(3001, () => {
    console.log(`Server started on ${HOST}:${PORT}`);
    
})

app.get('/', (req, res) => {
    res.send('Blog anime')
})

app.use('/anime', AnimeRoutes)

app.use(express.json())