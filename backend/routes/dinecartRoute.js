import express from 'express'
import authDineUser from '../middlewares/authDineUser.js'
import { updateDineCart } from '../controllers/dinecartController.js'

const dinecartRouter = express.Router()

dinecartRouter.post('/update', authDineUser, updateDineCart )

export default dinecartRouter