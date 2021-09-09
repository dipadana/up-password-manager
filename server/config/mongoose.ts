import { connect } from 'mongoose'

const uri = 'mongodb+srv://postgres:postgres@cluster0-ttloa.gcp.mongodb.net/yourpass?retryWrites=true&w=majority';

(async () => {
  try{
    await connect(uri, {
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    console.log('Database connected')
  }
  catch(err){
    console.log(err)
  }
})()