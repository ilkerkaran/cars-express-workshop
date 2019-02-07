import express from 'express';
import router from './routes/index';
import config from './config';
const app = express();
app.use('/', router);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}!`);
});
