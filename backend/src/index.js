
import express from 'express';

import dotenv from 'dotenv';

import authRoutes from './routes/auth.route.js';

dotenv.config();

const PORT=process.env.PORT

const app = express();

app.use("/api/auth",authRoutes);


app.listen(PORT, () => {
    console.log('Server is running on PORT:', PORT);
    });