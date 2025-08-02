import User from "../models/User.js";

// Update User CartData : /api/cart/update
export const updateCart = async (req , res ) => {
    try {
        const { userId, cart } = req.body;
        await User.findByIdAndUpdate( userId, {cart} )
        res.json({ success: true, message: "Cart Updated" })

    } catch (error) {
        console.log(error.message)
        return res.json({ success: false, message: error.message })
    }
}