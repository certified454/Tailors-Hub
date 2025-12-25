import express from 'express';
import 'dotenv/config';
import userRoutes from './routes/userRoutes.js';
import { connectDB } from "./lib/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});