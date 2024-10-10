const express = require('express');
const { getActivitySuggestions } = require('../controllers/activityController');

const router = express.Router();

router.get('/suggestions', getActivitySuggestions);

module.exports = router;
