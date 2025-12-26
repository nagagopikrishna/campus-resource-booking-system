import express from 'express'
import authRoutes from './routes/authRoutes.js'

const app = express(); // express instance
app.use(express.json());

app.use('/api/auth', authRoutes)

app.get("/", (req, res) =>{
    res.send("campus resource booking system api runngin");
})


export default app;