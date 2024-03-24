import {Request, Response, NextFunction} from 'express';
import { Product } from '../model/product';

export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const products = await Product.find();

      res.status(200).json({
         status: 'success',
         data: {
            products: products
         }
      });
   }
   catch (err)
   {
      res.status(400).json({
         status: 'failed',
         message: 'Invalid to fetch data'
      });
   }
   next();
};

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const newProduct = await Product.create(req.body);

      res.status(201).json({
         status: 'success',
         data: {
            products: newProduct
         },
      });
   }
   catch (err) 
   {
      res.status(400).json({
         status: 'failed',
         message: 'Invalid data object initialized'
      });
   }
   next();
};