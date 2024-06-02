import app from './app';
import mongoose from 'mongoose';

import { CONFIG } from './utils/config';
import logger from './utils/logger';

mongoose.connect(CONFIG.DB).then(() => logger.info('DB connection successful'))
.catch(err => {
  logger.log('error', err);
});

app.listen(CONFIG.PORT, () => {
  logger.info(`App running on port ${CONFIG.PORT}`);
});