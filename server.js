import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import apiRoutes from "./Routes/apiRoutes.js";
const path = require('path');


dotenv.config();
const DB=process.env.MONGO_URL;

try {
    console.log('hello');
    await mongoose.connect(DB, {});
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }

const app=express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
console.log("inside server");
app.use('/api',apiRoutes);

//static files
app.use(express.static(path.join(__dirname, '../client/build')))
app.get('*' , function(req , res){
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
})

app.get("/",(req,res)=>{
    res.send("<h1>Welcome To DreamWed- Connect</h1>")
});

const PORT= process.env.PORT || 8000;

//3 step heroku
if(process.env.NODE_ENV == "production"){
  app.use(express.static("client/build"));
}

app.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`);
})