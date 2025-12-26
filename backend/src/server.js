import dotenv from 'dotenv'
import app from './app.js'
import connectionDB from './config/db.js';


dotenv.config();
const PORT = process.env.PORT || 4000

const startServer = async () =>{
    try {
        await connectionDB();
        app.listen(PORT, () =>{
            console.log("server running");
        })
    } catch (error) {
        console.log("server connection failed: " + error);
    }
}


startServer();