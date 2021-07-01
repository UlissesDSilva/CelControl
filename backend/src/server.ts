import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  return res.send('Hello world')
})

app.listen(3333, () => {
  console.log('Running on port ' + 3333);
});