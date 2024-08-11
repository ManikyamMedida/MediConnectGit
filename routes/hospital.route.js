// routes/hospital.route.js
import express from "express"
// import express from "../server.js"
const router = express.Router();
// import hospital.controller from '../controllers/hospital.controller.js'
import { registerHospital, loginHospital, updateProfile,getAllHospitals,logoutHospital} from '../controllers/hospital.controller.js'  // Named imports

// Hospital Routes
//router.post('/hospitals', registerHospital);
router.get('/gethospitals', getAllHospitals);

// Register a hospital
router.post('/register', registerHospital);

// Login a hospital
router.post('/login', loginHospital);

// Logout hospital
router.post('/logout', logoutHospital);


// Update hospital profile
router.put('/profile/:id', updateProfile);

router.post('/registerPatient', registerPatient);

export default router

// export {hospitalRoutes} from './hospital.route.js'