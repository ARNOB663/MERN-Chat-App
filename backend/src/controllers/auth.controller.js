import User from "../models/user.model.js";
import bcrypt from "bcryptjs"; 
export const signup =  async (req, res) => {
    const {fullname, email, password} = req.body;
     try
     {
        //hash password
        if(password.length < 6)
        {
            return res.status(400).json({msg: "Password must be atleast 6 characters"});
        }
       const user = await User.findOne({email});
         if(user)
         {
              return res.status(400).json({msg: "User already exists"});
         }
         const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const newUser = new User({
                fullname,
                email,
                password: hashedPassword
            });
            if(newUser)
            {
                
            }
            else
            {
              res.status(400).json({msg: "User not created"});   
            }
     }
    catch(error)
    {

    }

}
 export const login = (req, res) => {
    res.send("login Route");
}

export const logout = (req, res) => {
    res.send("logout Route");
}
