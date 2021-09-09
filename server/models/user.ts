import { model, Schema, Document } from 'mongoose'
import { generateHash } from '../helpers/bcrypt'

export interface IUser {
  email: string,
  password: string,
  username: string
}

export interface IUserModel extends IUser, Document{}

const userSchema = new Schema({
  username: {
    type: String,
    required: 'Name required'
  },
  email: {
    type: String,
    required: 'Email required'
  },
  password: {
    type: String,
    required: 'Password required'
  }
}, { timestamps:true, versionKey:false })

userSchema.path('email').validate(function(value:any) {
  return User.findOne({ email: value })
    .then(user => {
      if(user) return false 
    })
}, 'Email user is already registered!')

userSchema.pre<IUserModel>('save', function(next:any){
  this.password = generateHash(this.password)
  next()
})

const User = model<IUserModel>('User', userSchema)
export default User
