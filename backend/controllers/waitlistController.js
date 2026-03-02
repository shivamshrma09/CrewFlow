const Waitlist = require('../models/Waitlist');

exports.joinWaitlist = async (req, res) => {
  try {
    const { email, suggestion, rating } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const existingEmail = await Waitlist.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const waitlistEntry = new Waitlist({ email, suggestion, rating });
    await waitlistEntry.save();

    res.status(201).json({ message: 'Successfully joined waitlist', email });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getAllWaitlist = async (req, res) => {
  try {
    const waitlist = await Waitlist.find().sort({ createdAt: -1 });
    res.status(200).json({ count: waitlist.length, data: waitlist });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
