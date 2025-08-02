import express from 'express'
import authUser from '../middlewares/authUser.js'
// import { getAllOrders, getUserOrders, placeOrderCOD, updateOrder } from '../controllers/orderController.js'
import authSeller from '../middlewares/authSeller.js'
import { getDineUserOrders, placeOrderCOD } from '../controllers/dineorderController.js'

const dineorderRouter = express.Router()

dineorderRouter.post('/cod', placeOrderCOD)
dineorderRouter.post('/user', getDineUserOrders)
// dineorderRouter.get('/seller', authSeller, getAllOrders)
// dineorderRouter.put('/status', authSeller , updateOrder)



// dineorderRouter.post('/cod', authUser, placeOrderCOD)
// dineorderRouter.get('/user', authUser, getUserOrders)
// dineorderRouter.get('/seller', authSeller, getAllOrders)
// dineorderRouter.put('/status', authSeller , updateOrder)

export default dineorderRouter