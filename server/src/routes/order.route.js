import {Router} from 'express'
import { CreateOrder } from '../controller/order.controller.js';

const router = Router();

// create order

router.post("/create",CreateOrder)


// update order status 


export default router