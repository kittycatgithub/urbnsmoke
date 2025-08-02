import jwt from 'jsonwebtoken'
import DineUser from "../models/DineUser.js";


// Register User: /api/dineuser/entry
export const registerDineUser = async ( req, res ) => {
    try {
        const { name, mobile, dineCart } = req.body;
        if( !name || !mobile ){
            return res.json({ success: false, message: "Missing Details" })
        } 
        const existingUser = await DineUser.findOne({mobile})
        if(existingUser){
            return res.json({ success: true, user: existingUser,  message: "Successfully Logged In" }) 
        }
        const dineuser = await DineUser.create({name, mobile, dineCart, password: "pass@123"})
        const token = jwt.sign({ id: dineuser._id }, process.env.JWT_SECRET, { expiresIn: '10d' })
                res.cookie('token', token, {
                    httpOnly: true, //Prevent JavaScript to access cookie
                    secure: process.env.NODE_ENV === 'production',
                    // Use secure cookies in production
                    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict', 
                    // CSRF protection
                    maxAge: 10 * 24 * 60 * 60 * 1000,
                    // Cookie expiration time
                    
                })
                return res.json({ success: true, user: {
                    mobile: dineuser.mobile, name: dineuser.name, dineCart: dineuser.dineCart , _id: dineuser._id
                } })
    } catch (error) {
        console.log(error.message)
        return res.json({ success: false, message: error.message })   
    }
}

// Fetch User Data : /api/dineuser/get

export const getCart = async (req , res ) => {
    try {
        const { userId } = req.body;
        const existingUser = await DineUser.findOne({userId})
        if(existingUser){
            return res.json({ success: true, user: existingUser,  message: "Cart Fetched Successfully" }) 
        }

    } catch (error) {
        console.log(error.message)
        return res.json({ success: false, message: error.message })
    }
}