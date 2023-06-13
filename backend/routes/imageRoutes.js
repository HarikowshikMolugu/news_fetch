
const express = require('express');
const imageController = require('../controllers/imageController');

const router = express.Router();

router.get('/', imageController.getAllImages);
router.get('/:id', imageController.getImageById);

module.exports = router;
