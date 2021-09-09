import { decodeToken } from '../helpers/jwt'
import Password, { IPassword } from '../models/password'
import { Request, Response, NextFunction } from 'express'

export const authentication = ( req:Request, res:Response, next:NextFunction) => {
  const { access_token } = req.headers
  if(access_token){
    req.loggedUser = decodeToken(access_token)
    next()
  }
  else{
    next({ status: 401,message: 'Invalid Authentication' })
  }
}

export const authorization = async ( req:Request, res:Response, next:NextFunction ) => {
  const { _id } = req.params
  const UserId = req.loggedUser._id
  try{
    const data:IPassword | null = await Password.findOne({ _id }) 
    if(data){
      if(data.UserId == UserId){
        next()
      }
      else{
        next({ status:403, message: 'Invalid Authorization' })
      }
    }
    else{
      next({ status:404, message: 'Data not found' })
    }
  }
  catch(err){
    next(err)
  }
}