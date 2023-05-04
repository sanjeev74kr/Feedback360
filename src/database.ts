import mongoose from "mongoose"
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI=process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error("MONGODB_URI environment variable is not defined");
    process.exit(1);
  }

mongoose.connect(MONGODB_URI)
.then(()=>{
    console.log("Connected To database")
})
.catch((error)=>{
    console.log("Error occured while connecting to database")
});

