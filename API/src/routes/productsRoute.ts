import express from 'express';

import {  getProducts } from '../controllers/productsController';

const productsRouter = express.Router();

productsRouter.route('/products').get(getProducts);

export default productsRouter;