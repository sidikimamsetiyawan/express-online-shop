const express = require('express');

const AnagramsController = require('../controller/anagrams');

const router = express.Router();

// POST
router.post('/', AnagramsController.displayGroupAnagrams);

module.exports = router;