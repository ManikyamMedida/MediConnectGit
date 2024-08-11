
// server.js
import express from "express";
import cors from "cors";
import connectDB from "./utils/db.js";
import hospitalRoutes from './routes/hospital.route.js' // Import hospital routes
import medicalFacilitiesRoutes from './routes/medicalFacilities.route.js' // Import medicalFacilities routes
import emergencyServiceRoutes from './routes/emergencyService.route.js'
import complaintRoutes from './routes/complaint.route.js'
import RatingandReviewRoutes from './routes/RatingandReview.route.js'


import dotenv from 'dotenv'
export default express
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
app.use(cors());
app.use(express.json());
app.use('/api/hospital', hospitalRoutes); // Use hospital routes
app.use('/api/medicalFacilities', medicalFacilitiesRoutes);
app.use('/api/emergencyService', emergencyServiceRoutes);
app.use('/api/complaint', complaintRoutes);
app.use('/api/RatingandReview', RatingandReviewRoutes);



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
app.get("/",(req,res)=>{
    res.json({
        message:"hello"
    })
})

app.post('/login', async(req, res) => {
    try{
        const {email,password}=req.body
        console.log(email,password)
    const user=await db.collection("").findOne({email,password})
    
        if (user) {
        
          if (user.password===req.body.password) {
            return res.json({ message: "Login Successful" });
          }
        }
    else{
        res.json({message:"Invalid credentials"})
    }
}
    catch{console.log(error)
        res.status(500).json({ message: "Internal server error" });
    }
})

app.post('/register',async(req, res) => {
    try{
        const {Name,email,mobileNo,password}=req.body
        console.log(Name,email,mobileNo,password)
    const user= await db.collection("user").insertOne({})
   if(user){
    return res.json({ message: "Signup Successful" });
   }        
}
    catch{console.log(error)
        res.status(500).json({ message: "Internal server error" });
    }
})

// export default express