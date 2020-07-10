const router = require('express').Router()

module.exports = router

//all routing files will live in here
router.use('/fish', require('./fish'))


//if route isn't found
router.use((req, res, next) => {
    const error = new Error('Not Found')
    error.status = 404
    next(error)
})
