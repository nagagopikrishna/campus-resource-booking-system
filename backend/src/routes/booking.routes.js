import express from 'express'
import { cancelBooking, createBooking, getUserBooking } from '../controllers/booking.controller';


const route = express.Router();

/**
 * @route  POST /api/booking
 * @desc Book a resource
 */

route.post("/booking", createBooking);


/**
 * @route PUT /api/booking/:id/cancel
 * @desc cancel booking
 */
route.put("/:id/cancel", cancelBooking);


/**
 * @route GET /api/users/:id/bookings
 * @desc Get booking of user
 */

route.get("/:id/bookings", getUserBooking)

export default route