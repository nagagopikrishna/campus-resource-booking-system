import Resource from "../model/Resource.model.js";
import Booking from "../model/Booking.model.js";




export const createBooking = async (req, res) =>{
    try {
        const {resource, startTime, endTime} = req.body;
        const user = req.user.id;

        // check overlapping bookings
        const conflict = await Booking.findOne({
            resource,
            status: "Booked",
            $or: [
                {
                    startTime: {$lt: endTime},
                    endTime: {$gt: startTime}
                }
            ]

        })

        if (conflict){
            return res.status(400).json({message: "Resource already booked for this slot"})
        }



        const booking = await booking.create({
            user,
            resource,
            startTime,
            endTime
        })

        res.status(201).json(booking)

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}



export const cancelBooking = async (req, res) =>{
    try {
        const booking = await Booking.findOne(req.params.id);

        if (!booking){
            return res.status(404).json({message: "Booking not found"});
        }

        booking.status = "cancelled";
        await booking.save();

        res.status(200).json("Booking cancelled successfully");

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


export const getUserBooking = async (req, res) =>{
    try {

        const booking = await Booking.findOne({user: req.params.id}).populate("resource").sort({startTime: -1});
        res.status(200).json(booking);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}