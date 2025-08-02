import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: { type : String, required: true } ,
    price: { type: Number, required: true },
    category : { type: String, required: true },
    image : { type: String, required: true },
    inStock : { type: Boolean, default: true }
}, { timestamps: true })
    // description: { type : Array, required: true } 
    // image : { type: Array, required: true },
    // inStock : { type: Boolean, default: true }



const Product = mongoose.models.product || mongoose.model('product', productSchema)

export default Product
