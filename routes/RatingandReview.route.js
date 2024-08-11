// routes/Ratingandreview.route.js
import express from 'express'
const router = express.Router();
import {createRating,getAllRatings,getRating,updateRating,deleteRating} from '../controllers/RatingandReview.controller.js'

// Create a new rating
router.post('/createRating', createRating);

// Get all ratings
router.get('/getAllRatings', getAllRatings);

// Get a specific rating
router.get('/getRating/:id', getRating);

// Update a rating
router.put('/updateRating/:id', updateRating);

// Delete a rating
router.delete('/deleteRating/:id', deleteRating);

export default router;