const Hospital = require('../models/Hospital');
const User = require('../models/User');

exports.addHospitalData = async (req, res) => {
  const { hospitalId, data } = req.body;

  try {
    const hospital = await Hospital.findById(hospitalId);

    if (!hospital) {
      return res.status(404).json({ message: 'Hospital not found' });
    }

    hospital.data = data;
    await hospital.save();

    res.json(hospital);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getHospitalData = async (req, res) => {
  try {
    const hospitals = await Hospital.find({ verified: true });
    res.json(hospitals);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
