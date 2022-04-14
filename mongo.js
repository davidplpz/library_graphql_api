import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ silent: process.env.NODE_ENV === "production" });

const MONGODB_URI = `${process.env["MONGO_URI"]}`;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado a Mongo"))
  .catch((error) => console.log(error.message));
