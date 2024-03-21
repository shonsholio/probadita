const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.main);
router.get('/ciudad-jardin', mainController.plantilla);


module.exports = router;
