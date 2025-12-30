const adminOnly = (req, res, next) =>{

    if (req.User && req.User.role === "admin"){
        next();
    }

    else{
        res.status(403).json({message: "Admin access only"});
    }
}


export default adminOnly;