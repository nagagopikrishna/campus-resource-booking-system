import mongoose from 'mongoose'
import dotenv from 'dotenv'


dotenv.config();

const connectionDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log("DB connection successfull" + conn.connection.host);
    } catch (error) {
        console.log("DB Connection error: " + error);
        throw error
    }
}

export default connectionDB