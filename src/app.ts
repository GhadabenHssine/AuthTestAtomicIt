// src/app.ts
import express from 'express';
import connectDB from './database/connection';
import authRoutes from './routes/authRoutes.ts';
import dotenv from 'dotenv';

dotenv.config();


const app = express();


app.use(express.json());


connectDB();

app.use('/auth', authRoutes);

export default app;
