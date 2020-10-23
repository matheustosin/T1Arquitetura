import express from 'express';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errprHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errprHandler);

app.listen(3333);
