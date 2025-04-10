import mongoose from "mongoose";

export const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDb Connected Successfully!");     
    } catch (error) {
        console.log(`Monogo DB Server Error ${error.message}`);
        process.exit(1);
    }
}