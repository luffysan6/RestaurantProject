import mongoose from 'mongoose'


const todoSchema =  mongoose.Schema({
    title:String,
    description : String,
    isComplete : Boolean
})

const todomodel = mongoose.model('todo',todoSchema)

//Schema  = Desgin


export default todomodel;