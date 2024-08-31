const express = require('express');
const { addHospitalData, getHospitalData } = require('../controllers/dataController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/hospital', authMiddleware, addHospitalData);
router.get('/hospital', authMiddleware, getHospitalData);

module.exports = router;
