const express = require('express');
const router = express.Router();
let { products } = require('../data/store');

// 1. GET /api/products/search - Search products (MUST be registered before /:id)
router.get('/search', (req, res, next) => {
    try {
        const query = req.query.q;
        if (!query) {
            return res.status(400).json({ message: "Search query param 'q' is required" });
        }
        
        const searchResults = products.filter(p => 
            p.name.toLowerCase().includes(query.toLowerCase()) || 
            p.description.toLowerCase().includes(query.toLowerCase())
        );
        
        res.status(200).json(searchResults);
    } catch (err) {
        next(err);
    }
});

// 2. GET /api/products - Get all products (with optional category filter)
router.get('/', (req, res, next) => {
    try {
        const { category } = req.query;
        if (category) {
            const filtered = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
            return res.status(200).json(filtered);
        }
        res.status(200).json(products);
    } catch (err) {
        next(err);
    }
});

// 3. GET /api/products/:id - Get a single product
router.get('/:id', (req, res, next) => {
    try {
        const product = products.find(p => p.id === req.params.id);
        if (!product) {
            return res.status(404).json({ message: `Product with ID ${req.params.id} not found` });
        }
        res.status(200).json(product);
    } catch (err) {
        next(err);
    }
});

// 4. POST /api/products - Create a product
router.post('/', (req, res, next) => {
    try {
        const { name, price, description, category, image, stock, features } = req.body;
        
        // Validation
        if (!name || price === undefined || !category || !image) {
            return res.status(400).json({ message: "Fields 'name', 'price', 'category', and 'image' are required." });
        }
        
        const newProduct = {
            id: `prod-${Date.now()}`,
            name,
            price: Number(price),
            description: description || "",
            category,
            image,
            stock: stock !== undefined ? Number(stock) : 10,
            features: Array.isArray(features) ? features : []
        };
        
        products.push(newProduct);
        res.status(201).json(newProduct);
    } catch (err) {
        next(err);
    }
});

// 5. PUT /api/products/:id - Update a product
router.put('/:id', (req, res, next) => {
    try {
        const { id } = req.params;
        const productIndex = products.findIndex(p => p.id === id);
        
        if (productIndex === -1) {
            return res.status(404).json({ message: `Product with ID ${id} not found` });
        }
        
        const { name, price, description, category, image, stock, features } = req.body;
        
        // Update elements inline in the in-memory array
        const updatedProduct = {
            ...products[productIndex],
            name: name !== undefined ? name : products[productIndex].name,
            price: price !== undefined ? Number(price) : products[productIndex].price,
            description: description !== undefined ? description : products[productIndex].description,
            category: category !== undefined ? category : products[productIndex].category,
            image: image !== undefined ? image : products[productIndex].image,
            stock: stock !== undefined ? Number(stock) : products[productIndex].stock,
            features: features !== undefined ? (Array.isArray(features) ? features : []) : products[productIndex].features
        };
        
        products[productIndex] = updatedProduct;
        res.status(200).json(updatedProduct);
    } catch (err) {
        next(err);
    }
});

// 6. DELETE /api/products/:id - Delete a product
router.delete('/:id', (req, res, next) => {
    try {
        const { id } = req.params;
        const productIndex = products.findIndex(p => p.id === id);
        
        if (productIndex === -1) {
            return res.status(404).json({ message: `Product with ID ${id} not found` });
        }
        
        products.splice(productIndex, 1);
        res.status(204).end(); // No content response
    } catch (err) {
        next(err);
    }
});

module.exports = router;
