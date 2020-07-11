const router = require('express').Router()
const db = require('../db')
module.exports = router

router.get("/", async (req, res, next) => {
    res.send("this is fish")
})

router.post("/", async (req, res, next) => {
    const docRef = db.collection('fish').doc(req.body.name)

    const result = await docRef.set({
        name: req.body.name
    })

    res.send(result)
})
