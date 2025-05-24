import express from 'express';
import connectToDatabase from "./database/mongodb.js";
import dotenv from 'dotenv';

dotenv.config();
const app = express();


app.listen(3000, async () => {
    console.log("Server listening in 3000");
    await connectToDatabase()
})