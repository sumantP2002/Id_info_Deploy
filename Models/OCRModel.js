import mongoose from "mongoose";

const OCRSchema = new mongoose.Schema({
      identificationNumber: {
        type: String,
        required: true,
        unique: true,
      },
      name: 
      {
        type:String,
        required:true,
      },
      lastName: {
        type: String,
        required:true,
      },
      dateOfBirth:{
        type:String,
        required:true,
      },
      dateOfIssue:  
      {
      type:String,
      required:true,
      },
      dateOfExpiry: {
        type:String,
        required:true,
        },
    
  });
  
  export default mongoose.model("OCRModel", OCRSchema);