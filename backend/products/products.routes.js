const express = require('express');
const router = express.Router();
const ProductsController = require('./products.controller');

router.get('', ProductsController.getProducts);
router.get('/:id', ProductsController.getProductById);

module.exports = router;
