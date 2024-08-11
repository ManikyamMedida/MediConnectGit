import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema({
    hospital_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
        required: true
    },
    patient_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comments: { type: String },
    date: {
        type: Date,
        default: Date.now
    }
});
export const Rating = mongoose.model('Rating', ratingSchema);