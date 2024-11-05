const express = require('express')
const app = express()
const postRouter = require('./routes/posts.js')
app.use(express.static('public'))


const PORT = process.env.PORT
const HOST = process.env.HOST


app.listen(PORT, (req, res) => {
    console.log(`Server is runnig at ${HOST}:${PORT}`)
})

app.get('/', (req, res) => {
    res.send('Post')
})


 app.use('/posts', postRouter) 