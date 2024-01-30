const mongoose=require('mongoose');
const MONGO_URL=require('dotenv').config();


const connectDb=async ()=>{
    try {
        const con=await mongoose.connect(process.env.MONGO_URl,{
        })
        console.log('connect to db');
   
    } catch (error) {
        console.log("there was an error connecting to db")

    }
}



connectDb();
module.exports=connectDb;