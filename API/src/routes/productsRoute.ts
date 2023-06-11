import express from 'express';

import { getOtherProducts, getProducts } from "../controllers/productsController";

const productsRouter = express.Router();

productsRouter.route('/products').get(getProducts)
productsRouter.route('/otherproduct').get(getOtherProducts)

export default productsRouter;