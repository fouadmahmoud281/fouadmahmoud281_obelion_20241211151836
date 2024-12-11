const NCA = require('../models/NCA');

// Controller function to initiate a new process
exports.initiateProcess = async (req, res) => {
    try {
        const { ncaName, agreement, submissionRules } = req.body;

        // Create a new NCA entry
        const newNCA = await NCA.create({ ncaName, agreement, submissionRules });

        // Return success response
        res.status(201).json({ message: 'Process initiated successfully', data: newNCA });
    } catch (error) {
        res.status(500).json({ message: 'Error initiating process', error: error.message });
    }
};

// Controller function to get all NCA entries
exports.getAllNCAEntries = async (req, res) => {
    try {
        const ncaEntries = await NCA.findAll();

        // Return success response
        res.status(200).json({ data: ncaEntries });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving NCA entries', error: error.message });
    }
};

// Controller function to update an NCA entry
exports.updateNCAEntry = async (req, res) => {
    try {
        const { id } = req.params;
        const { ncaName, agreement, submissionRules } = req.body;

        // Update the NCA entry
        const updatedNCA = await NCA.update(
            { ncaName, agreement, submissionRules },
            { where: { id } }
        );

        // Return success response
        res.status(200).json({ message: 'NCA entry updated successfully', data: updatedNCA });
    } catch (error) {
        res.status(500).json({ message: 'Error updating NCA entry', error: error.message });
    }
};

// Controller function to delete an NCA entry
exports.deleteNCAEntry = async (req, res) => {
    try {
        const { id } = req.params;

        // Delete the NCA entry
        await NCA.destroy({ where: { id } });

        // Return success response
        res.status(200).json({ message: 'NCA entry deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting NCA entry', error: error.message });
    }
};
