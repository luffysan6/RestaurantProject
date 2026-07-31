import {Router} from 'express'
import { CreateFood } from '../controller/food.controller';

const router = Router();

router.post('/create',  CreateFood);

export default router;