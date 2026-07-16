import { Router } from "express";
import {
  checkAuth,
  LoginController,
  RegisterController,
} from "../controller/auth.controller.js";

const router = Router();

router.get("/login", LoginController);
router.post("/register", RegisterController);
router.get("/check", checkAuth);

export default router;
