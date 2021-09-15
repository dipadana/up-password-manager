import { connect } from "mongoose";

const uri = process.env.MONGODB as string;

(async () => {
  try {
    await connect(uri, {
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Database connected");
  } catch (err) {
    console.log(err);
  }
})();
