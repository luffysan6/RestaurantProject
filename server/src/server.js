//const expres  = require("express") module.exports for common js

import express from "express"; // type module  export

import IndexRouter from "./routes/index.route.js";
import dbConnect from "./config/db.js";
import FoodRouter from "./routes/food.route.js";
import path from "path";
import UserRouter from "./routes/user.route.js";
import AuthRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import "dotenv/config";
import cors from "cors";
import OrderRouter from "./routes/order.route.js";
// Server Variables
const app = express();

import { fileURLToPath } from "url";
import env from "./config/env.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//App use  Files
app.use(
  cors({
    origin: env.APP_URL,
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());
// app.use(IndexRouter);
app.use("/auth", AuthRouter);
app.use("/user", UserRouter);
app.use("/food", FoodRouter);
app.use("/order", OrderRouter);
// Static frontend
app.use(express.static(path.join(__dirname, "../../", "client/dist")));

app.get("/{*splat}", (req, res) => {
  res.sendFile(path.join(__dirname, "../../", "client/dist", "index.html"));
});

app.listen(env.PORT, async () => {
  await dbConnect();
  console.log(`Server is Running at http://localhost:${env.PORT}`);
});
