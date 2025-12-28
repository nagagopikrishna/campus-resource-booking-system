import express from 'express'
import protect from "../middlewares/auth.middleware.js"
import { getTopRooms, getUsageAalytics } from '../controllers/analytics.controller.js'



const router = express.json();

/**
 * GET /api/analytics/usage
 */

router.get("/usage", protect, getUsageAalytics);


/**
 * GET /api/analytics/top-rooms
 */
router.get("/top-rooms", protect, getTopRooms);


export default routers