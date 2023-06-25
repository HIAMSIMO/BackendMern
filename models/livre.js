const mongoose = require('mongoose')

const Schema = mongoose.Schema

const livreSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    Edition:{

        type:String,
        required:true
    },
    Author:{
        type:String,
        required:true
    },
    Language:{
        type:String,
        default:'English'

    }
},{timestamps: true}
)

module.exports = mongoose.model('livre', livreSchema)