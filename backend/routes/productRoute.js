import express from 'express'
import authSeller from '../middlewares/authSeller.js'
import { addProduct, changeStock, productById, productList } from '../controllers/productController.js'
import upload from '../middlewares/multer.js'

const productRouter = express.Router()

productRouter.post('/add', authSeller, upload.single('image'),  addProduct)
productRouter.get('/list', productList)
productRouter.get('/id', productById)
productRouter.post('/stock', authSeller, changeStock)

export default productRouter