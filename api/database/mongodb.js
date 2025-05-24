import mongoose from 'mongoose';

const connectToDatabase = async () => {
    try {
        console.log(process.env.DB_URI);
        await mongoose.connect(process.env.DB_URI);

        console.log(`Connected to database in dev mode`);
    } catch (error) {
        console.error('Error connecting to database: ', error);

        process.exit(1);
    }
}

export default connectToDatabase;