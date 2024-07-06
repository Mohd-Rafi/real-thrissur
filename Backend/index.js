import express from 'express';
import cors from 'cors';
import router from './routes/routes.js';
import mongoose from './db/dbConnection.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(router);
app.use(cors());
app.use(express.json());
app.use(express.static('uploads'));

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`app is running @ http://localhost:${PORT}/`);
});
