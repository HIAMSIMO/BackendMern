const details = require("../models/livre")
const mongoose = require('mongoose')

//get all (getAll)
const getAll = async(req,res) =>{
    const Books = await details.find({}).sort({createdAt: -1})

    res.status(200).json(Books)
}

//get single (getSingle)
const getSingle = async(req,res) =>{
    const {id } = req.params


    const Books = await details.findById(id)

    if(!Books){
        return res.status(400).json({error:"no such doc exist !!"})
    }

    res.status(200).json(Books)
}

//create new (createNew)
const createNew = async (req,res) =>{

    //add to DB
    const {title, Edition, Author, Language} = req.body
    try{
        const Books = await details.create({title,Edition,Author,Language})
        res.status(200).json(Books)
    }catch(e){
        res.json({error : e.message})

    }
}

//delete one (deleteOne)
const deleteOne = async (req,res) =>{
    const { id } = req.params


    const Books = await details.findOneAndDelete({_id: id})

    if(!Books){
        return res.status(400).json({error:"no such doc exist !!"})
    }

    res.status(200).json(Books)

}

//Update one (updateOne)
const updateOne = async (req,res) =>{
    const { id } = req.params


    const Books = await details.findOneAndUpdate({_id: id},{
        ...req.body
    })

    if(!Books){
        return res.status(400).json({error:"no such doc exist !!"})
    }
    
    res.status(200).json(Books)
}




module.exports = {
    createNew,
    getAll,
    getSingle,
    deleteOne,
    updateOne
}