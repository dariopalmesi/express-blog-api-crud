const express = require('express') 
const app = express()
const AnimeRoutes = require('./routes/AnimeRoutes.js')
const notFoundMiddleware = require('./middlewares/notFound.js')
const loggerMiddleware = require('./middlewares/loggerMiddleware.js')
app.use(express.json())


const PORT = process.env.PORT
const HOST = process.env.HOST


app.listen(3001, () => {
    console.log(`Server started on ${HOST}:${PORT}`);
    
})

app.get('/', (req, res) => {
    res.send('Blog anime')
})

app.use('/anime', (req, res, next) => {
    throw new Error('You broke everything dude!')
})

app.use('/anime', loggerMiddleware)

app.use('/anime', AnimeRoutes)

app.use(notFoundMiddleware)

app.use((err, req, res, next) => {
    console.log(('Error:', err.message));
    console.error(err.stack);
    res.status(500).send({
        message: 'Something went wrong',
        error: err.message
    })
    
})

