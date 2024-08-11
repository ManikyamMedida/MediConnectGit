// routes/emergencyService.route.js
import express from 'express'
const router = express.Router();
import {createEmergencyService,getAllEmergencyServices,getEmergencyService,updateEmergencyService,deleteEmergencyService} from '../controllers/emergencyService.controller.js'

// Create a new emergency service
router.post('/createEmergencyService', createEmergencyService);

// Get all emergency services
router.get('/getAllEmergencyServices', getAllEmergencyServices);

// Get a specific emergency service
router.get('/getEmergencyService:id', getEmergencyService);

// Update an emergency service
router.put('/updateEmergencyService:id', updateEmergencyService);

// Delete an emergency service
router.delete('/deleteEmergencyService:id', deleteEmergencyService);

export default router;