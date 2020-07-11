const router = require('express').Router()
const db = require('../db')
module.exports = router


//route for adding/deleting fish into db

//get all fish
router.get("/", async (req, res, next) => {
    try {

        //make reference to collection
        const docRef = db.collection('fish')

        //get all fish
        const result = await docRef.get()
        const fish = []
        //for each document returned, push to fish array
        result.forEach((doc) => {
            fish.push(doc.data())
        })
        res.send(fish).status(200)

    } catch (error) {
        res.send(`Error getting the fish: ${error}`)
        next(error)
    }
})

router.get("/:name", async (req, res, next) => {
    try {
        const docRef = db.collection('fish').doc(`${req.params.name}`)
        const result = await docRef.get()
        console.log(result)
        res.send(result.data())
    } catch (error) {
        next(error)
    }
})

router.post("/", async (req, res, next) => {
    const docRef = db.collection('fish').doc(req.body.name)

    const result = await docRef.set({
        name: req.body.name
    })

    res.send(result)
})


