import mongoose from "mongoose";

const dineSchema = new mongoose.Schema({
    name: { type: String , required: true},
    mobile : { type : Number, required: true},
    dineCart: { type: Object, default: {} },
    dineOrder : { type : Object, default: {} }
}, { minimize: false })

const DineUser = mongoose.models.dineuser || mongoose.model('dineuser', dineSchema)

export default DineUser
