import { Request, Response, NextFunction } from 'express';
import { sendApiResponse, sendInternalErrorResponse } from '../utils/apiResponse';
import { OrderServices } from '../services/orderServices';

export const getOrders = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const result = await new OrderServices().getOrders();

      return sendApiResponse(res, {
         status: result.status,
         message: result.message,
         data: result.data
      });
   }
   catch (err) {
      sendInternalErrorResponse(res, err);
      next(err);
   }
};