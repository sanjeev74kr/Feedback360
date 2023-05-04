import mongoose from "mongoose"
import dotenv from "dotenv";
import { messages } from "./utils/messages";

dotenv.config();

const MONGODB_URI=process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error(messages.ERROR_DATABASE_ENV);
    process.exit(1);
  }

mongoose.connect(MONGODB_URI)
.then(()=>{
    console.log(messages.SUCCESS_DATABASE);
})
.catch((error)=>{
    console.log(messages.ERROR_DATABASE);
});

