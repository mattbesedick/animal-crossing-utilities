const router = require('express').Router()
const db = require('../db')
module.exports = router


//route for caught fish events
router.get('/', async (req, res, next) => {

    //reference to the firebase collection, can also put a query here
    const rootRef = await db.collection('fish')
    //observing changes to the whole collection
    const observer = rootRef.onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
            console.log(change.type)
        })
    })
})




