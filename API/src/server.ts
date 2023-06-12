import app from './app';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config({
  path: './config.dev.env'
});

const DB = process.env.MONGO_CLUSTER.replace('<password>', process.env.PASSWORD);

mongoose.connect(DB).then(() => console.log('DB connection successful'))
.catch(err => {
  throw new Error(err);
});

const port = process.env.PORT || 5050;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});