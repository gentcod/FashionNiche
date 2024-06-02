import { Request, Response, NextFunction } from 'express';
import { ProductServices } from '../services/productServices';
import { sendApiResponse, sendInternalErrorResponse} from '../utils/apiResponse';

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
   try {
      console.log(req.body);
      const result = await new ProductServices().createProduct(req.body);
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

export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
   try {
      console.log(req.body);
      console.log(req.file);
            
      const result = await new ProductServices().getProducts();
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