import express from 'express'
import { login, signup } from "../controllers/authController.js";


const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

export default router;

// {
//   "name": "Alex Johnson",
//   "email": "alex@example.com",
//   "password": "Password123",
//   "role": "student",
//   "department": "CSE"
// }