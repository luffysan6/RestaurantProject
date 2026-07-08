import mongoose from "mongoose";
const dbConnect = async () => {
  await mongoose.connect("mongodb://localhost:27017/Insta");
  console.log("Connected DB SUccessfully");

  return;
};

export default dbConnect;
