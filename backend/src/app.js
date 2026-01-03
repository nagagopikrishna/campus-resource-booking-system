import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js'
import resourceRoutes from './routes/resource.routes.js'
import bookingRoutes from './routes/booking.routes.js'
import analyticsRoutes from "./routes/analytics.routes.js"

dotenv.config();

const app = express(); // express instance

// Allow frontent to talk to backend
app.use(
    cors(
        {
            origin: process.env.CLIENT_ORIGIN,
            credentials: true,
        }
    )
)

// parse JSON body
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use("/api/resources", resourceRoutes);
app.use("/api/resources", bookingRoutes);
app.use("/api/users", bookingRoutes);
app.use("/api/analytics", analyticsRoutes);



app.get("/", (req, res) =>{
    res.send("campus resource booking system api runngin");
})


export default app;