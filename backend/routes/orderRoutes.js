const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// GET all orders (Admin)
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find().sort({ createdAt: -1 });
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST create order
router.post('/', async (req, res) => {
    const order = new Order({
        customerName: req.body.customerName,
        whatsAppNumber: req.body.whatsAppNumber,
        address: req.body.address,
        items: req.body.items,
        totalAmount: req.body.totalAmount
    });

    try {
        const newOrder = await order.save();
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
