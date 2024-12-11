const TradingVenue = require('../models/TradingVenue');

// Controller to handle creating a new trading venue order
exports.createOrder = async (req, res) => {
    const { orderId, orderType, orderQuantity } = req.body;

    try {
        const newOrder = await TradingVenue.create({
            orderId,
            orderType,
            orderQuantity
        });

        return res.status(201).json(newOrder);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

// Controller to handle retrieving all trading venue orders
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await TradingVenue.findAll();
        return res.status(200).json(orders);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// Controller to handle retrieving a specific trading venue order by ID
exports.getOrderById = async (req, res) => {
    const { id } = req.params;

    try {
        const order = await TradingVenue.findOne({ where: { id } });

        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }

        return res.status(200).json(order);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// Controller to handle updating a specific trading venue order by ID
exports.updateOrder = async (req, res) => {
    const { id } = req.params;
    const { orderId, orderType, orderQuantity } = req.body;

    try {
        const order = await TradingVenue.findOne({ where: { id } });

        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }

        order.orderId = orderId;
        order.orderType = orderType;
        order.orderQuantity = orderQuantity;

        await order.save();

        return res.status(200).json(order);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

// Controller to handle deleting a specific trading venue order by ID
exports.deleteOrder = async (req, res) => {
    const { id } = req.params;

    try {
        const order = await TradingVenue.findOne({ where: { id } });

        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }

        await order.destroy();

        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
