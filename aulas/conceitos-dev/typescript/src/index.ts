import express from 'express';
import { helloWorld } from './routes';

const app = express();

app.get('/', helloWorld);

// app.get('/', (req, res) => {
//   return res.send({ message: 'Hello, World!' });
// });

app.listen(3333, () => {
  console.log('Application is running!👌');
});
