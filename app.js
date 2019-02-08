import express from 'express';
import router from './routes/index';
import config from './config';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use('/', router);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}!`);
});
