const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.main);
router.get('/luisfer', mainController.luisfer);



module.exports = router;
