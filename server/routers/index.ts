import { Router } from 'express'
import { Request, Response, NextFunction } from 'express'
import userRouter from './userRouter'
import passwordRouter from './passwordRouter'

const router = Router()

router.get('/', (req:Request,res:Response,next:NextFunction) => {
  res.status(200).json({ message:'Server Connected' })
})

router.use('/users',userRouter)
router.use('/passwords', passwordRouter)

export default router