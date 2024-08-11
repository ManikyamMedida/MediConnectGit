import mongoose from "mongoose"

const medicalFacilitySchema = new mongoose.Schema({
    hospital_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
        required: true
    },
    facility_type: {
        type: String,
        required: true
    },   // ICU, General Ward, Emergency Room, etc.
    availability_status: {
        type: String,
        enum: ['Available', 'Not Available'],
        required: true
    },
    cost_per_day: {
        type: Number,
        required: true
    },
    insurance_accepted: [{ type: String }]
});

export const MedicalFacility = mongoose.model("MedicalFacility", medicalFacilitySchema)