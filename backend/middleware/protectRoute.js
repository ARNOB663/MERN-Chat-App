import jwt from 'jsonwebtoken';
import User from '../models/usermodel.js';

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({ error: "You are not authorized to access this route" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded) {
            return res.status(401).json({ error: "You are not authorized to access this route" });
        }

        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            return res.status(404).json({ error: "No user found with this id" });
        }

        req.user = user;

        next();

    } catch (error) {
        console.log("Error in protectRoute middleware: ", error.message);
        res.status(401).json({ message: "You are not authorized to access this route" });
    }
};

export default protectRoute;