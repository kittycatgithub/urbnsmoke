// User model is used to store/map User data in DB

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cart: { type: Object, default: {} }

}, { minimize: false })
// minimize: false, allows to create User with empty cart object data

const User = mongoose.models.user || mongoose.model('user', userSchema)

export default User