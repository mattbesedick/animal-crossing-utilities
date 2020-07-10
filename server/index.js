const express = require("express")
const db = require("./db")
const morgan = require('morgan')
const path = require('path')
require('dotenv').config()
const app = express()

const PORT = process.env.PORT || 8080


const createApp = () => {

    //logging middleware
    app.use(morgan('dev'))

    //body parsing middleware
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    //routes for api
    app.use('/api', require('./api'))

    //serve public files middleware
    app.use(express.static(path.join(__dirname, '..', 'public')))

    // any remaining requests with an extension (.js, .css, etc.) send 404
    app.use((req, res, next) => {
        if (path.extname(req.path).length) {
            const err = new Error('Not found')
            err.status = 404
            next(err)
        } else {
            next()
        }
    })

    // sends index.html
    app.use('*', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'public/index.html'))
    })

    // error handling endware
    app.use((err, req, res, next) => {
        console.error(err)
        console.error(err.stack)
        res.status(err.status || 500).send(err.message || 'Internal server error.')
    })
}

const startListening = () => {
    // start listening (and create a 'server' object representing our server)
    const server = app.listen(PORT, () => console.log(`server starting on port ${PORT}`))
}

const bootApp = async () => {
    await createApp()
    await startListening()
}

bootApp()