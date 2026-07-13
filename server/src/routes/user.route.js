import { Router } from "express";
import { saveUser } from "../controller/user.controller.js";

const router = Router();

router.get("/", async (req, res) => {
  res.send("Welcome  User Api");
});

router.post("/save", saveUser);

export default router;
