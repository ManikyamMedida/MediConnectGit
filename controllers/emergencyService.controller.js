import { EmergencyService } from "../models/emergencyService.model.js";


//Create a new emergency service
export const createEmergencyService = async (req, res) => {
    try {
        const { hospital_id, service_type, response_time, cost } = req.body;
        const emergencyService = new EmergencyService({
            hospital_id,
            service_type,
            response_time,
            cost
        });

        await emergencyService.save();
        res.status(201).json(emergencyService);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all emergency services
export const getAllEmergencyServices = async (req, res) => {
    try {
        const services = await EmergencyService.find().populate('hospital_id', 'name', 'address');
        res.json(services);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a specific emergency service
export const getEmergencyService = async (req, res) => {
    try {
        const { id } = req.params;
        const emergencyService = await EmergencyService.findById(id).populate('hospital_id', 'name', 'address');

        if (!emergencyService) {
            return res.status(404).json({ message: 'Emergency service not found.' });
        }

        res.json(emergencyService);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an emergency service
export const updateEmergencyService = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const emergencyService = await EmergencyService.findByIdAndUpdate(id, updates, { new: true });
        if (!emergencyService) {
            return res.status(404).json({ message: 'Emergency service not found.' });
        }

        res.json(emergencyService);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an emergency service
export const deleteEmergencyService = async (req, res) => {
    try {
        const { id } = req.params;
        const emergencyService = await EmergencyService.findByIdAndDelete(id);

        if (!emergencyService) {
            return res.status(404).json({ message: 'Emergency service not found.' });
        }

        res.json({ message: 'Emergency service deleted successfully.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};