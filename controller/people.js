const { products, people } = require('../data')

const getPeople = (req, res) => {
    res.status(200).json({success: true, data: people})
}

const postPeople = (req, res) => {
    const {name} = req.body
    console.log(name)
    if (!name){
        res.status(400).json({success: false, msg: 'please give input'})
    }
    res.status(200).json({success: true})
}

const putPeople = (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const newPerson = people.map((person) => {
        if (person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).json({success: true, data: newPerson})
}

module.exports = {
    getPeople,
    postPeople,
    putPeople
}
