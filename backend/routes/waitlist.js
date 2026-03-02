const express = require('express');
const router = express.Router();
const { joinWaitlist, getAllWaitlist } = require('../controllers/waitlistController');

router.post('/join', joinWaitlist);
router.get('/all', getAllWaitlist);

module.exports = router;
