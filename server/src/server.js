import express from "express";
import dotenv from "dotenv";
import IndexRouter from "./routes/index.route.js";

// Functions that need to be insitalised before server starting
dotenv.config();

// Server Variables
const app = express();
const PORT = process.env.PORT;

//App use Files
app.use(IndexRouter);

app.listen(PORT, () => {
  console.log(`Server is Running at http://localhost:${PORT}`);
});
