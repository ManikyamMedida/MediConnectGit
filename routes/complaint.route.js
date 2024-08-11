// routes/complaint.route.js
import express from 'express'
const router = express.Router();
import {createComplaint,getAllComplaints,getComplaint,updateComplaint,resolveComplaint} from '../controllers/complaint.controller.js'

// Create a new complaint
router.post('/createComplaint', createComplaint);

// Get all complaints
router.get('/getAllComplaints', getAllComplaints);

// Get a specific complaint
router.get('/getComplaint:id', getComplaint);

// Update a complaint
router.put('/updateComplaint:id', updateComplaint);

// Resolve a complaint
router.patch('/resolveComplaint:id',resolveComplaint);

export default router