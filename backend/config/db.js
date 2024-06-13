import mongoose from "mongoose";

export const connectDB= async()=>{
    await mongoose.connect('mongodb+srv://vishal:12121212@cluster0.btmkvcn.mongodb.net/food-del').then(()=>console.log("DB connected"))
}