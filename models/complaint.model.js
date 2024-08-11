import mongoose from "mongoose"

const complaintSchema = new mongoose.Schema({
    patient_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    hospital_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Resolved', 'Escalated'],
        required: true
    },
    date_reported: {
        type: Date,
        default: Date.now
    }
});
export const Complaint = mongoose.model("Complaint", complaintSchema)