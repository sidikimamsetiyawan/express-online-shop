const express = require('express');

const CategoriesController = require('../controller/categories');

const router = express.Router();

// READ - GET
router.get('/', CategoriesController.getAllCategories);
router.post('/', CategoriesController.createNewCategories);
router.patch('/:idCategory', CategoriesController.updateCategories);
router.delete('/:idCategory', CategoriesController.deleteCategories);

module.exports = router;