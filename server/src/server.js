//const expres  = require("express") module.exports for common js

import express from "express"; // type module  export

import IndexRouter from "./routes/index.route.js";
import dbConnect from "./config/db.js";
import TodoRouter from "./routes/todo.route.js";
import UserRouter from "./routes/user.route.js";
import AuthRouter from "./routes/auth.route.js";

// Server Variables
const app = express();
const PORT = 3000;

//App use  Files
app.use(express.json());
app.use(IndexRouter);
app.use("/auth", AuthRouter);
app.use("/user", UserRouter);

app.listen(PORT, async () => {
  await dbConnect();
  console.log(`Server is Running at http://localhost:${PORT}`);
});
