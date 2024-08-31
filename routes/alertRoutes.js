const express = require('express');
const { createAlert, getAlerts } = require('../controllers/alertController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/alert', authMiddleware, createAlert);
router.get('/alert', authMiddleware, getAlerts);

module.exports = router;