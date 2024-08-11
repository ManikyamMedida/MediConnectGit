// routes/medicalFacilities.route.js
import express from 'express'
const router = express.Router();
import { createMedicalFacility, getAllMedicalFacilities,getMedicalFacility,updateMedicalFacility,deleteMedicalFacility} from '../controllers/medicalFacilities.controller.js'  // Named imports

// Create a new medical facility
router.post('/createMedicalFacility', createMedicalFacility);

// Get all medical facilities
router.get('/getAllMedicalFacilities', getAllMedicalFacilities);

// Get a specific medical facility
router.get('/getMedicalFacility:id', getMedicalFacility);

// Update a medical facility
router.put('/updateMedicalFacility:id',updateMedicalFacility);

// Delete a medical facility
router.delete('/deleteMedicalFacility:id', deleteMedicalFacility);

export default router
