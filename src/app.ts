import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import indexRouter from './routes';
import { CONFIG } from './utils/config';

const app = express();

const corsOptions = {
   origin: CONFIG.CLIENT_URL,
   methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
   credentials: true,
   optionsSuccessStatus: 200
};

if (process.env.NODE_ENV === 'development') {
   app.use(morgan('dev'));
}

app.use(cors(corsOptions));
app.use(express.json())
app.use('', indexRouter);

export default app;