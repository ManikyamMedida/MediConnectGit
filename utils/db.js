import mongoose from "mongoose";

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('mongodb connected successfully');
    }
    catch(error){
        console.log(error);
    }
}
export default connectDB;



// import { MongoClient } from "mongodb";

// let db;
// async function connectToDB(cb) {
//     const url = "mongodb://localhost:27017"
//     const client = new MongoClient(url);
//     await client.connect();
//     db = client.db("vvhack");
//     cb();
// }

// // connectToDB()

// export { connectToDB, db };
