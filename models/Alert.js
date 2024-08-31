const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
  message: { type: String, required: true },
  alertLevel: { type: String, enum: ['State', 'District', 'Hospital'], required: true },
  targetId: { type: mongoose.Schema.Types.ObjectId, refPath: 'alertLevel' }, // Dynamic reference
  issuedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  measures: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Alert', alertSchema);
