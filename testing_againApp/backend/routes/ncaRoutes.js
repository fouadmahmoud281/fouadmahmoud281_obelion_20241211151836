const express = require('express');
const router = express.Router();
const ncaController = require('../controllers/ncaController');

router.post('/nca/initiate', ncaController.initiateProcess);
router.get('/nca', ncaController.getAllNCAEntries);
router.put('/nca/:id', ncaController.updateNCAEntry);
router.delete('/nca/:id', ncaController.deleteNCAEntry);

module.exports = router;
