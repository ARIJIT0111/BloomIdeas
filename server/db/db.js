import mongoose from "mongoose";

const connecToMongoDB = async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/note_app");
        console.log("connected to MongoDB");
    }catch(error) {
        console.log (`Error connecting to MOngoDb: ${error.message}.`);
    }
};

export default connecToMongoDB;