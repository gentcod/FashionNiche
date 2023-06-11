import express from 'express';
import cors from 'cors';
import productsRouter from './routes/productsRoute';

const app = express();

var corsOptions = {
   origin: 'http://localhost:3000',
   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));

app.use('/api', productsRouter)


export default app;