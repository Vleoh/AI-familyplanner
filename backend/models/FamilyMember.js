const mongoose = require('mongoose');

const FamilyMemberSchema = new mongoose.Schema({
    name: { type: String, required: true },
    preferences: { type: Object },
    // ... otros campos
});

module.exports = mongoose.model('FamilyMember', FamilyMemberSchema);
