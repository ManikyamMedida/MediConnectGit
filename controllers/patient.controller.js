import { Patient } from "../models/patient.model.js";
import bcrypt from "bcrypt.js";
import jwt from "jsonwebtoken";

export const registerPatient = async (req, res) => {
    try {
        const { hospital_id, patient_id, password } = req.body;
        const newPatient = new Patient({
            hospital_id,
            patient_id,
            password
        });

        await newPatient.save();
        res.status(201).json(newPatient);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getPatientById = async (req, res) => {
    try {
        const { id } = req.params; // Get patient ID from request parameters
        const patient = await Patient.findById(id).populate('hospital_id', 'name address'); // Populate hospital details

        if (!patient) {
            return res.status(404).json({ message: 'Patient not found.' });
        }

        res.json(patient);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updatePatient = async (req, res) => {
    try {
        const { id } = req.params; // Get patient ID from request parameters
        const updates = req.body;

        const patient = await Patient.findByIdAndUpdate(id, updates, { new: true });
        if (!patient) {
            return res.status(404).json({ message: 'Patient not found.' });
        }

        res.json(patient);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deletePatient = async (req, res) => {
    try {
        const { id } = req.params; // Get patient ID from request parameters
        const patient = await Patient.findByIdAndDelete(id);

        if (!patient) {
            return res.status(404).json({ message: 'Patient not found.' });
        }

        res.json({ message: 'Patient deleted successfully.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// export const register = async (req, res) => {
//     try {
//         const { fullname, age, gender, phoneNumber, email, role } = req.body;
//         if (!fullname || !age || !gender || !phoneNumber || !email || !password || !role) {
//             return res.status(400).json({
//                 message: "Enter all required fields",
//                 success: false
//             });
//         };
//         let user = await User.findOne({ email });
//         if (user) {
//             return res.status(400).json({
//                 message: "User already exists with this email",
//                 success: false
//             })
//         }
//         const hashedPassword = await bcrypt.hash(password, 10);
//         await User.create({
//             fullname,
//             age,
//             gender,
//             phoneNumber,
//             email,
//             password: hashedPassword,
//             role,

//         })
//     }
//     catch (error) {

//     }
// }
// export const login = async (req, res) => {
//     try {
//         const { email, password, role } = req.body;
//         if (!email || !password || !role) {
//             return res.status(400).json({
//                 message: "Enter all required fields",
//                 success: false
//             });
//         };
//         const user = await User.findOne({ email });
//         if (user) {
//             return res.status(400).json({
//                 message: "Incorrect email or password",
//                 success: false
//             })
//         }
//         const isPasswordMatch = await bcrypt.compare(password, user.password);
//         if (!isPasswordMatch) {
//             return res.status(400).json({
//                 message: "Incorrect email or password",
//                 success: false
//             })
//         }
//         //check role
//         if(role != user.role){
//             return res.status(400).json({
//                 message:"Account doesn't exist with current role",
//                 success:false
//             })
//         }
//         const tokenData={
//             userId:user._id
//         }
//         const token = await jwt.sign(tokenData,process.env.SECRET_KEY,{expiresIn:'1d'})
//         user={
//             _id:user=_id,

//         }

//         return res.status(200).cookie("token",token,{maxAge:1*24*60*60*1000,httpsOnly:true,sameSite:'strict'}).json({
//             message:`Welcome back ${user.fullname}`,
//             success:true
//         })
//     } catch (error) {

//     }
// }