import  express from 'express'
import { registerDineUser } from '../controllers/dineUserController.js'

const dineRouter = express.Router()

dineRouter.post('/entry', registerDineUser)

export default dineRouter