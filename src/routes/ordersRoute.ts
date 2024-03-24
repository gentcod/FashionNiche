import express from 'express';
import { getOrders } from '../controllers/ordersController';

const ordersRouter = express.Router();

ordersRouter.route('/orders').get(getOrders);

export default ordersRouter;