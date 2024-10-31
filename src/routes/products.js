const express = require('express');

const ProductsController = require('../controller/products');

const router = express.Router();

// READ - GET
router.get('/', ProductsController.getFilterDataProducts);
router.get('/check-stocks', ProductsController.getFilterDataProductsForCheckStocks);
router.get('/sorted-by-sales', ProductsController.getProductsSortedBySales);

module.exports = router;