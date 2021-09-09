import { model, Schema, Document } from 'mongoose'
import { IUserModel } from './user'

export interface IPassword extends Document {
  UserId: IUserModel['_id'],
  passwordData: String,
  nameData: String,
  urlData: String
}

const passwordSchema = new Schema({
  UserId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: 'UserId required'
  },
  passwordData: {
    type: String,
    required: 'Password required' 
  },
  nameData: {
    type: String,
    required: 'Name/Username/Email required'
  },
  urlData: {
    type: String,
    match: [/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/, 'Invalid URL format'],
    required: 'URL required'
  }
}, { timestamps:true, versionKey:false })

const Password = model<IPassword>('Password', passwordSchema)
export default Password