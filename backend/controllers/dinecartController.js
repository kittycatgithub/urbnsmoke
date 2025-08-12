import DineUser from "../models/DineUser.js";

// Update User CartData : /api/cart/update
export const updateDineCart = async (req , res ) => {
    try {
        const { userId, dineCart } = req.body;
        await DineUser.findByIdAndUpdate( userId, {dineCart} )
        res.json({ success: true, message: "Cart Updated" })

    } catch (error) {
        console.log(error.message)
        return res.json({ success: false, message: error.message })
    }
}