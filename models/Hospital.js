const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  verified: { type: Boolean, default: false },
  data: {
    patients: Number,
    diseases: Array,
    bedAvailability: Number,
    mortalityRate: Number,
  },
  admin1Id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to Admin1
}, { timestamps: true });

module.exports = mongoose.model('Hospital', hospitalSchema);
