import { MedicalFacility } from "../models/medicalFacilities.model.js";

// Create a new medical facility
export const createMedicalFacility = async (req, res) => {
    try {
        const { hospital_id, facility_type, availability_status, cost_per_day, insurance_accepted } = req.body;
        const medicalFacility = new MedicalFacility({
            hospital_id,
            facility_type,
            availability_status,
            cost_per_day,
            insurance_accepted
        });

        await medicalFacility.save();
        res.status(201).json(medicalFacility);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all medical facilities
export const getAllMedicalFacilities = async (req, res) => {
    try {
        const facilities = await MedicalFacility.find();
        res.json(facilities);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a specific medical facility
export const getMedicalFacility = async (req, res) => {
    try {
        const { id } = req.params;
        const medicalFacility = await MedicalFacility.findById(id);

        if (!medicalFacility) {
            return res.status(404).json({ message: 'Medical facility not found.' });
        }

        res.json(medicalFacility);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Update a medical facility
export const updateMedicalFacility = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const medicalFacility = await MedicalFacility.findByIdAndUpdate(id, updates, { new: true });
        if (!medicalFacility) {
            return res.status(404).json({ message: 'Medical facility not found.' });
        }

        res.json(medicalFacility);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


// Delete a medical facility
export const deleteMedicalFacility = async (req, res) => {
    try {
        const { id } = req.params;
        const medicalFacility = await MedicalFacility.findByIdAndDelete(id);

        if (!medicalFacility) {
            return res.status(404).json({ message: 'Medical facility not found.' });
        }

        res.json({ message: 'Medical facility deleted successfully.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};