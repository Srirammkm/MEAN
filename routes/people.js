const express = require('express')
const router = express.Router()

const {
    getPeople,
    putPeople,
    postPeople
} = require('../controller/people')

router.get('/',getPeople)
router.post('/',postPeople)
router.put('/:id',putPeople)

module.exports = router;