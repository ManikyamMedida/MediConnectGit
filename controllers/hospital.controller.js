import { Hospital } from "../models/hospital.model.js"
import jwt from "jsonwebtoken";
//import bcrypt from "bcrypt.js";

//Register a hospital
export const registerHospital = async (req, res) => {
    try { 
        const { name, address, contact_number, email, website, type, registration_number, accreditation_status, bed_count, specialties, services_offered, billing_policy, password } = req.body;

        const existingHospital = await Hospital.findOne({ email });
        if (existingHospital) {
            return res.status(400).json({ message: 'Hospital already registered.' });
        }

        const hospital = new Hospital({
            name,
            address,
            contact_number,
            email,
            website,
            type,
            registration_number,
            accreditation_status,
            bed_count,
            specialties,
            services_offered,
            billing_policy,
            password
        });

        await hospital.save();
        res.status(201).json({ message: 'Hospital registered successfully.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Login a hospital
export const loginHospital = async (req, res) => {
    try {
        const { email, password } = req.body;
        const hospital = await Hospital.findOne({ email });

        if (!hospital || !(await hospital.comparePassword(password))) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }


        // Generate a JWT token
        const token = jwt.sign({ id: hospital._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, hospital });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Update hospital profile
export const updateProfile = async (req, res) => {
    try {
        const { id } = req.params; // Assuming the hospital ID is passed in the URL
        const updates = req.body;

        const hospital = await Hospital.findByIdAndUpdate(id, updates, { new: true });
        if (!hospital) {
            return res.status(404).json({ message: 'Hospital not found.' });
        }

        res.json(hospital);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllHospitals= async(req,res) =>{
    try {
        const hospitals = await Hospital.find(); // Fetch all hospitals from the database
        res.status(200).json(hospitals); // Send the hospitals as a JSON response
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving hospitals', error: error.message });
    }
}

export const logoutHospital = (req, res) => {
    // In a stateless JWT system, you don't need to do anything on the server side.
    // Just inform the client to remove the token.
    res.status(200).json({ message: 'Logged out successfully. Please remove the token from your client.' });
};





// export {hospitalController} from './controllers/hospital.controller.js'
// Export the controller functions as an object
// export const hospitalController = {
//     registerHospital,
//     loginHospital,
//     updateProfile
// };

// export default hospitalController; // Default export
