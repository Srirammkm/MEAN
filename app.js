const express = require('express')
const app = express()
const people = require('./routes/people')

//app.use('/api/people',people)
app.use(express.static('./methods-public'))
app.use(express.urlencoded({ extended: false}))
app.use(express.json())
app.use('/api/people',people)


app.post('/api/login',(req, res) => {
    console.log(req.body.name) 
    res.end("posted successfully")
})
app.listen(5000,() => {
    console.log("running on port 5000...")
}) 