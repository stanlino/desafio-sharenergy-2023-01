import "reflect-metadata";
import "express-async-errors"
import 'dotenv/config'

import cors from 'cors'
import express from 'express';

import './shared/container'
import { routes } from './routes';
import { errorsMonitor } from './errors';

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errorsMonitor)

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`🔥 Servidor rodando na porta ${PORT}`);
});
