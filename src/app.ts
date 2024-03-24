import express from 'express';
import cors from 'cors';
import productsRouter from './routes/productsRoute';
import morgan from 'morgan';
import ordersRouter from './routes/ordersRoute';

const app = express();

const corsOptions = {
   origin: 'http://localhost:3000',
   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

if (process.env.NODE_ENV === 'development') {
   app.use(morgan('dev'));
}

app.use(cors(corsOptions));

app.use('/api', productsRouter);
app.use('/api', ordersRouter);


export default app;