//const expres  = require("express") module.exports for common js

import express from "express"; // type module  export

import IndexRouter from "./routes/index.route.js";
import dbConnect from "./config/db.js";
import TodoRouter from "./routes/todo.route.js";
import UserRouter from "./routes/user.route.js";
import AuthRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import "dotenv/config";
import cors from "cors";
// Server Variables
const app = express();
const PORT = 3000;

//App use  Files
app.use(
  cors({
    origin: "http://localhost:5173",
     credentials: true
  }),
);
app.use(express.json());
app.use(cookieParser());
app.use(IndexRouter);
app.use("/auth", AuthRouter);
app.use("/user", UserRouter);

app.listen(PORT, async () => {
  await dbConnect();
  console.log(`Server is Running at http://localhost:${PORT}`);
});
