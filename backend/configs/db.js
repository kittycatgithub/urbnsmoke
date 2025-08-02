import mongoose from 'mongoose'

// code to connect Express Project with MongoDB
const connectDB = async () => {
    try {
        mongoose.connection.on('connected', ()=> console.log("Database Connected"))
        await mongoose.connect(`${process.env.MONGODB_URI}/urbnsmoke`)
    } catch (error) {
        console.error(error.message)
    }
}

export default connectDB