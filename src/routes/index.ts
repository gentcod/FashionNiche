import express from 'express';
import productsRouter from '../routes/productsRoute';
import ordersRouter from '../routes/ordersRoute';

export const indexRouter = express.Router()

indexRouter.use('/api/v1', productsRouter)
indexRouter.use('/api/v1', ordersRouter)

export default indexRouter;