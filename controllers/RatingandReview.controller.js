import { Rating } from "../models/RatingandReview.model.js";

// Create a new rating
export const createRating = async (req, res) => {
    try {
        const { hospital_id, patient_id, rating, comments } = req.body;
        const newRating = new Rating({
            hospital_id,
            patient_id,
            rating,
            comments
        });

        await newRating.save();
        res.status(201).json(newRating);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all ratings
export const getAllRatings = async (req, res) => {
    try {
        const ratings = await Rating.find().populate('hospital_id', 'name').populate('patient_id', 'name');
        res.json(ratings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a specific rating
export const getRating = async (req, res) => {
    try {
        const { id } = req.params;
        const rating = await Rating.findById(id).populate('hospital_id', 'name').populate('patient_id', 'name');

        if (!rating) {
            return res.status(404).json({ message: 'Rating not found.' });
        }

        res.json(rating);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a rating
export const updateRating = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const rating = await Rating.findByIdAndUpdate(id, updates, { new: true });
        if (!rating) {
            return res.status(404).json({ message: 'Rating not found.' });
        }

        res.json(rating);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a rating
export const deleteRating = async (req, res) => {
    try {
        const { id } = req.params;
        const rating = await Rating.findByIdAndDelete(id);

        if (!rating) {
            return res.status(404).json({ message: 'Rating not found.' });
        }

        res.json({ message: 'Rating deleted successfully.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
