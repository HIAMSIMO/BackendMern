const express = require('express')
const {
    createNew, getAll,getSingle, deleteOne,updateOne
} = require('../controller/controllers')



const router = express.Router()


//GET all
router.get('/', getAll)

//GET single
router.get('/:id', getSingle)

//POST New
router.post('/', createNew)
 
//DELETE 
router.delete('/:id', deleteOne)

//UPDATE
router.patch('/:id', updateOne)




module.exports = router