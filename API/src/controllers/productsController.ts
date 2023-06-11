import {Request, Response, NextFunction} from 'express';

export const getProducts = (req: Request, res: Response, next: NextFunction) => {
   res.status(200).json({
      status: 'success',
      data: {
         name: 'Oyefule'
      }
   });
   next();
}

export const getOtherProducts = (req: Request, res: Response, next: NextFunction) => {
   res.status(200).json({
      status: 'success',
      data: {
         name: 'Oyefule Oluwatayo'
      }
   });
   next();
}