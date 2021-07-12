const express = require('express')
const { products, people } = require('./data')

const app = express()

const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const date = new Date().getDate()
    console.log(`${method} ${url} ${date}`)
    next()
}

app.get('/',logger,(req, res) => {
     
    res.send("Home Page")
})

app.get('/about',(req, res) => {
    res.send("About Page")
})

app.listen(5000,() => {
    console.log("running on port 5000...")
})