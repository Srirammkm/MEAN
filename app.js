const express = require('express')
const { products, people } = require('./data')

const app = express()

app.use(express.static('./methods-public'))
app.use(express.urlencoded({ extended: false}))
app.use(express.json())

app.get('/',(req, res) => {
    res.send('<h1>testing</h1>')
})

app.get('/api/people',(req, res) => {
    res.status(200).json({success: true, data: people})
})

app.post('/api/people',(req, res) => {
    const {name} = req.body
    console.log(name)
    if (!name){
        res.status(400).json({success: false, msg: 'please give input'})
    }
    res.status(200).json({success: true})
})

app.put('/api/people/:id',(req, res) => {
    const { id } = req.params
    const { name } = req.body

    const newPerson = people.map((person) => {
        if (person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).json({success: true, data: newPerson})
})

app.post('/api/login',(req, res) => {
    console.log(req.body.name) 
    res.end("posted successfully")
})
app.listen(5000,() => {
    console.log("running on port 5000...")
}) 