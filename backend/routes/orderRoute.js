import express from 'express'
import authUser from '../middlewares/authUser.js'
import { getAllDineOrders, getAllOrders, getUserOrders, placeOrderCOD, updateDineOrder, updateOrder, verifyRazorpay } from '../controllers/orderController.js'
import authSeller from '../middlewares/authSeller.js'

const orderRouter = express.Router()

// orderRouter.post('/cod', authUser, placeOrderCOD)
// Razorpay place order route
orderRouter.post('/cod', authUser, placeOrderCOD)
orderRouter.get('/user', authUser, getUserOrders)
orderRouter.get('/seller', authSeller, getAllOrders)
orderRouter.get('/seller/dine', authSeller, getAllDineOrders)
orderRouter.put('/status', authSeller , updateOrder)
orderRouter.put('/dinestatus', authSeller , updateDineOrder)

// verify payment
orderRouter.post('/verifyRazorpay', authUser, verifyRazorpay)

export default orderRouter