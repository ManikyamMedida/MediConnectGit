import mongoose from "mongoose"

const emergencyServiceSchema = new mongoose.Schema({
    hospital_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
        required: true
    },
    service_type: {
        type: String,
        enum: ['Ambulance', 'Emergency Room','Other'],
        required: true
    },
    response_time: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    }
});
export const EmergencyService = mongoose.model("EmergencyService", emergencyServiceSchema)