import { Request, Response, NextFunction } from 'express'

const errorHandling = (err:any, req:Request, res:Response, next:NextFunction) => {
  
  console.log("masuk error")
  console.log(err)
  let key:any

  // default error
  const status = err.status || 500
  const message = err.message || 'Internal Server Error'

  if(err.name === 'ValidationError') {
    // error validation
    const errors = []
    for(key in err.errors) {
      errors.push(err.errors[key].message)
    }
    res.status(400).json({
      message: 'validation error',
      errors
    })
  } else if(err.message.name === 'JsonWebTokenError') {
    res.status(status).json({ message: err.message.message })
  } else {
    res.status(status).json({ message })
  }
}

export default errorHandling