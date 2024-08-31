const Alert = require('../models/Alert');
const User = require('../models/User');

exports.createAlert = async (req, res) => {
  const { message, alertLevel, targetId, measures } = req.body;

  try {
    const alert = new Alert({
      message,
      alertLevel,
      targetId,
      issuedBy: req.user._id,
      measures,
    });

    await alert.save();
    res.status(201).json(alert);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getAlerts = async (req, res) => {
  try {
    const alerts = await Alert.find().populate('issuedBy', 'username');
    res.json(alerts);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
