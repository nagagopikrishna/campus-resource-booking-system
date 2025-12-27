import express from 'express'
import authRoutes from './routes/authRoutes.js'
import resourceRoutes from './routes/resource.routes.js'
import bookingRoutes from './routes/booking.routes.js'

const app = express(); // express instance
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use("/api/resources", resourceRoutes);
app.use("/api/resources", bookingRoutes);
app.use("/api/users", bookingRoutes);

// app.get("/", (req, res) =>{
//     res.send("campus resource booking system api runngin");
// })


export default app;