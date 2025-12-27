import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    resource:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Resource",
        required: true
    },

    startTime:{
        type: Date,
        required: true
    },

    endTime:{
        type: Date,
        required: true
    },

    status:{
        type: String,
        enum: ["booked", "cancelled", "completed"],
        default: "booked"
    }
},
{timestamps: true}
)


export default mongoose.model("Booking", bookingSchema);