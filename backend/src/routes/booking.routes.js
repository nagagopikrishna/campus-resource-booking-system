import express from 'express'
import { cancelBooking, createBooking, getUserBooking } from '../controllers/booking.controller.js';
import protect from '../middlewares/auth.middleware.js'


const route = express.Router();

/**
 * @route  POST /api/booking
 * @desc Book a resource
 */

route.post("/booking", protect, createBooking);


/**
 * @route PUT /api/booking/:id/cancel
 * @desc cancel booking
 */
route.put("/:id/cancel", protect, cancelBooking);


/**
 * @route GET /api/users/:id/bookings
 * @desc Get booking of user
 */

route.get("/:id/bookings", protect, getUserBooking)

export default route