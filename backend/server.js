import cookieParser from 'cookie-parser';
import express from 'express'
import cors from 'cors'
import connectDB from './configs/db.js';
import 'dotenv/config'
import userRouter from './routes/userRoute.js';
import sellerRouter from './routes/sellerRoute.js';
import productRouter from './routes/productRoute.js';
import addressRouter from './routes/addressRoute.js';
import orderRouter from './routes/orderRoute.js';
import cartRouter from './routes/cartRoute.js';
import path from 'path'
import dineRouter from './routes/dineRoute.js';
import dineorderRouter from './routes/dineorderRoute.js';
import dinecartRouter from './routes/dinecartRoute.js';

const app = express();                  // Created one app using express package
const port = process.env.PORT || 4000   // Add port no. where App will start

await connectDB()

// Allow multiple origins
const allowedOrigins = ["http://localhost:6173", "https://saudihotels.shop", "http://46.202.164.11", "https://api.saudihotels.shop"]

// Middleware confguration
app.use(express.json())  // all requests coming to backend will be passed using json method
app.use(cookieParser())  
app.use(cors({ origin: allowedOrigins, credentials: true })) // object inside cors method contains origins allowed to access backend
// Serve static files from /public
app.use('/products', express.static(path.join(process.cwd(), 'public/products')));

// create routes
app.get('/', (req, res)=> res.send("API is Working") )
app.use('/api/user', userRouter)
app.use('/api/seller', sellerRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/dinecart', dinecartRouter)
app.use('/api/address', addressRouter)
app.use('/api/order', orderRouter)
app.use('/api/dineorder', dineorderRouter)
app.use('/api/dineuser', dineRouter)

// start app
app.listen(port , ()=> {
    console.log(`Server is running on http://localhost:${port}`)
})