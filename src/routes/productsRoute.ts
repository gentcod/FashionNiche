import express from 'express';

import { getProducts, createProduct } from '../controllers/productsController';

const productsRouter = express.Router();

productsRouter.route('/product/create').post(
   createProduct
);
productsRouter.route('/product').get(getProducts);

export default productsRouter;