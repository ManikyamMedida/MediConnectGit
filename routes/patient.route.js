import express from "express"
// import express from "../server.js"
const router = express.Router();
// import hospital.controller from '../controllers/hospital.controller.js'
import { registerPatient,getPatientById,updatePatient,deletePatient} from '../controllers/patient.controller.js'  // Named imports

// Hospital Routes
//router.post('/hospitals', registerHospital);
router.get('/getpatient', getPatientById);

// Register a hospital
router.post('/registerPatient', registerPatient);

// Login a hospital
router.post('/login', loginHospital);

// Logout hospital
router.post('/logout', logoutHospital);


// Update hospital profile
router.put('/profile/:id', updatePatient);



export default router