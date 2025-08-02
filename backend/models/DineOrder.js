import mongoose from "mongoose";


const orderSchema = new mongoose.Schema({
    userId: {type: String, required: true, ref: 'dineuser'},
    name: {type: String, required: true},
    mobile: {type: String, required: true},
    items: [{
        product: {type:String, required: true, ref: 'product'},
        quantity: {type:Number, required: true},
    }],
    amount: {type: Number, required: true},
    status: {type: String, default: 'Food is being prepared'},
    paymentType: {type: String, required: true},
    isPaid: {type: Boolean, required: false},
}, {timestamps: true})

const  DineOrder = mongoose.models.dineorder || mongoose.model('dineorder', orderSchema)

export default DineOrder