import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    minLength: [5, "That title must me minmum of 5 Charaters ({VALUE})"],
    trim: true,
     required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  isComplete: Boolean,
});

const todomodel = mongoose.model("todo", todoSchema);

//Schema  = Desgin

export default todomodel;
