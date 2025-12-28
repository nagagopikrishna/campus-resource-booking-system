import Booking from "../model/Booking.model.js"

/**
 * GET /api/analytics/usage
 * Total bookings per resource
 */


export const getUsageAalytics = async (req, res) =>{
    try {
        const usage = await Booking.aggregate([
            {
                $match: {status: "booked"}
            },
            {
                $group: {
                    _id: "$resource",
                    totalBookings: {$sum: 1}
                }
            },
            {
                $lookup: {
                    from: "resource",
                    localField: "_id",
                    foreignField: "_id",
                    as: "resource"
                }
            },
            {
                $unwind: "$resource"
            }
        ]);

        res.status(200).json(usage);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
};



/**
 * GET /api/analytics/top-rooms
 * Top 5 booked resource
 */


export const getTopRooms = async (req, res) =>{
    try {
        const topRooms = await Booking.aggregate([
            {
                $match: {status: "booked"}
            },

            {
                $group: {
                    _id: "$resource",
                    totalBookings: {$sum: 1}
                }
            },
            {$sort: {totalBookings: -1}},
            {$limit: 5},
            {
                $lookup: {
                    from: "resources",
                    localField: "_id",
                    foreignField: "_id",
                    as: "resource"
                }
            },
            {$unwind: "$resource"}
        ]);

        res.status(200).json(topRooms);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}