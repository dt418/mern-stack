import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './libs/db.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.error('Failed to connect to the database:', error);
});