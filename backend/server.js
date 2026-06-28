require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const productRoutes = require('./routes/inMemoryProducts');
const orderRoutes = require('./routes/inMemoryOrders');

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// Root Route
app.get('/', (req, res) => {
    res.send('Pluto Home API is running with in-memory data store');
});

// A route designed to manually trigger/test our error handling middleware
app.get('/api/trigger-error', (req, res, next) => {
    const error = new Error('This is a simulated backend server error.');
    error.status = 500;
    next(error);
});

// 404 Route handler for unregistered routes
app.use((req, res, next) => {
    res.status(404).json({ message: "Requested route does not exist." });
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(`[Error Middleware] ${err.message}`);
    console.error(err.stack);
    
    res.status(err.status || 500).json({
        message: err.message || 'An unexpected error occurred on the server.',
        error: process.env.NODE_ENV === 'development' ? err.stack : {}
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
