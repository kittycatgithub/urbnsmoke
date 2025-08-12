import  express from 'express'
import { isAuth, logout, registerDineUser } from '../controllers/dineUserController.js'
import authDineUser from '../middlewares/authDineUser.js'

const dineRouter = express.Router()

dineRouter.post('/register', registerDineUser)
dineRouter.get('/is-auth',authDineUser , isAuth)
dineRouter.get('/logout',authDineUser, logout)

export default dineRouter