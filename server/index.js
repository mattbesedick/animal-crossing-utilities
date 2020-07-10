require('dotenv').config()
const express = require("express")
const app = express()

const port = process.env.PORT

app.get("/", (req, res, next) => {
    res.send("hello world")
})

app.listen(port || 4000, () => {
    console.log(`server is open on port ${port}`)
})