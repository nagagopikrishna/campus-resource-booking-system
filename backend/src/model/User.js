import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    },
    role:{
        type: String,
        enum: ["student", "faculty", "admin"],
        default: "student"
    },
    department:{
        type: "String",
        required: true,
        enum: [
        'CSE',
        'ECE',
        'EEE',
        'MECH',
        'CIVIL',
        'IT',
        'MBA',
        'OTHER',
      ]
    }
},
    {
        timestamps: true
    }
)


const User = mongoose.model("User", userSchema);

export default User;