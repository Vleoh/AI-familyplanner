const express = require('express');
const { getFamilyMembers, addFamilyMember } = require('../controllers/familyController');

const router = express.Router();

router.get('/', getFamilyMembers);
router.post('/', addFamilyMember);

module.exports = router;
