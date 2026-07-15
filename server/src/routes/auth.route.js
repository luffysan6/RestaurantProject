import {Router} from 'express'
import { LoginController } from '../controller/auth.controller.js';

const router =Router();


router.get("/login",LoginController)


export default router;