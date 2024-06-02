import dotenv from 'dotenv';

dotenv.config({
   path: './config.dev.env'
});

const dbString = process.env.NODE_ENV === 'development' 
   ? process.env.MONGO_CLUSTER.replace('<password>', process.env.PASSWORD) 
   : process.env.MONGO_LOCAL
;

const mb = 3 * 1024 * 1024;

export const CONFIG = {
   DB: dbString,
   PORT: process.env.PORT || 5050,
   CLIENT_URL: process.env.CLIENT_URL,
   MAX_UPLOAD_FILE_SIZE: mb
}