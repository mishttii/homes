const express = require('express');
const router = express.Router();
let { orders } = require('../data/store');

// GET /api/orders - Get all orders
router.get('/', (req, res, next) => {
    try {
        res.status(200).json(orders);
    } catch (err) {
        next(err);
    }
});

// POST /api/orders - Place a new order
router.post('/', (req, res, next) => {
    try {
        const { customerName, whatsAppNumber, address, items, totalAmount } = req.body;
        
        // Basic Validation
        if (!customerName || !whatsAppNumber || !address || !items || !Array.isArray(items) || items.length === 0 || totalAmount === undefined) {
            return res.status(400).json({ message: "Fields 'customerName', 'whatsAppNumber', 'address', 'items' (non-empty array), and 'totalAmount' are required." });
        }
        
        const newOrder = {
            id: `ord-${Date.now()}`,
            customerName,
            whatsAppNumber,
            address,
            items,
            totalAmount: Number(totalAmount),
            status: 'PENDING',
            createdAt: new Date().toISOString()
        };
        
        orders.push(newOrder);
        res.status(201).json(newOrder);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
