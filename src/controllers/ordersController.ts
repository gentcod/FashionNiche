import { Request, Response, NextFunction } from 'express';
import { Order } from '../models/OrderModel';

export const getOrders = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const orders = await Order.find();

      res.status(200).json({
         status: 'success',
         data: {
            orders: orders
         }
      });
   }
   catch (err) {
      res.status(400).json({
         status: 'failed',
         message: 'Invalid to fetch order data'
      });
   }
   next();
};