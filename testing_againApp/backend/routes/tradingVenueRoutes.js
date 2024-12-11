const express = require('express');
const router = express.Router();
const tradingVenueController = require('../controllers/tradingVenueController');

router.post('/orders', tradingVenueController.createOrder);
router.get('/orders', tradingVenueController.getAllOrders);
router.get('/orders/:id', tradingVenueController.getOrderById);
router.put('/orders/:id', tradingVenueController.updateOrder);
router.delete('/orders/:id', tradingVenueController.deleteOrder);

module.exports = router;
