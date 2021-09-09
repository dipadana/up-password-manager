if(process.env.NODE_ENV === "development") require('dotenv').config()

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import router from './routers'
import './config/mongoose'
import errorHandling from './middleware/errorHandler'

declare global {
  namespace Express {
    interface Request {
      loggedUser: any
    }
  }
}

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended:false }))
app.use(morgan('dev'))
app.use(cors())
app.use('/',router)

app.use(errorHandling)

app.listen(port, () => {
  console.log('App listen on port '+ port)
})

export default app