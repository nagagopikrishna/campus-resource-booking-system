import mongoose from "mongoose";

const resourceSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },

    type:{
        type: String,
        required: true,
        enum: ["CLASSROOM", "LAB", "SPORTS", "AUDITORIUM"]
    },

    location:{
        type: String,
        required: true
    },

    capacity:{
        type: Number,
        required: true
    },

    images:[
        {
            type: String
        }
    ],

    isActive:{
        type: Boolean,
        default: true
    }
},

{timestamps: true}
)

export default mongoose.model("Resource", resourceSchema);