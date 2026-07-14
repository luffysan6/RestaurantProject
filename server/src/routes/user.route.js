import { Router } from "express";
import { getUser, saveUser } from "../controller/user.controller.js";

const router = Router();

router.get("/", async (req, res) => {
  res.send("Welcome  User Api");
});

router.post("/save", saveUser);
router.post("/:id", getUser);

export default router;
