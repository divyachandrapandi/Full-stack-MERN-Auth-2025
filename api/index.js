import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import connectToDatabase from "./database/mongodb.js";
import userRoutes from "./routes/user.route.js";
import authRoutes from './routes/auth.route.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());


app.listen(3000, async () => {
    console.log("Server listening in 3000");
    await connectToDatabase()
})


app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    });
});