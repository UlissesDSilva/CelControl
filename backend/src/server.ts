import express from 'express';
import cors from 'cors';
import { routes } from './routes';
require('dotenv').config({
  path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
})

const app = express();
app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3333, () => {
  console.log('Running on ', 3333);
});