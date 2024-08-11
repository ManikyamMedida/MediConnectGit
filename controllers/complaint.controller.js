import { Complaint } from "../models/complaint.model.js";

// Create a new complaint
export const createComplaint = async (req, res) => {
    try {
        const { patient_id, hospital_id, description } = req.body;
        const complaint = new Complaint({
            patient_id,
            hospital_id,
            description
        });

        await complaint.save();
        res.status(201).json(complaint);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all complaints
export const getAllComplaints = async (req, res) => {
    try {
        const complaints = await Complaint.find().populate('patient_id', 'name').populate('hospital_id', 'name');
        res.json(complaints);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a specific complaint
export const getComplaint = async (req, res) => {
    try {
        const { id } = req.params;
        const complaint = await Complaint.findById(id).populate('patient_id', 'name').populate('hospital_id', 'name');

        if (!complaint) {
            return res.status(404).json({ message: 'Complaint not found.' });
        }

        res.json(complaint);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a complaint
export const updateComplaint = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const complaint = await Complaint.findByIdAndUpdate(id, updates, { new: true });
        if (!complaint) {
            return res.status(404).json({ message: 'Complaint not found.' });
        }

        res.json(complaint);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Resolve a complaint
export const resolveComplaint = async (req, res) => {
    try {
        const { id } = req.params;
        const complaint = await Complaint.findByIdAndUpdate(id, { status: 'Resolved' }, { new: true });

        if (!complaint) {
            return res.status(404).json({ message: 'Complaint not found.' });
        }

        res.json(complaint);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
