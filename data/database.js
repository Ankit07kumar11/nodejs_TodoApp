import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI,{
        dbName:"backendapi",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((c) => {
      console.log(`Database Connected Successfully with ${c.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};
