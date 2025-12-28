import jwt from 'jsonwebtoken'
import User from '../model/User.js'

const protect  = async (req, res, next) =>{
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.User = await User.findById(decoded.id).select("-password");

            return next();
        } catch (error) {
            return res.status(401).json({message: "Invalid or expired toten"});
        }
    }

    return res.status(401).json({message: "token not provided"});
}



export default protect