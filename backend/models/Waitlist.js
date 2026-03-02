const mongoose = require('mongoose');

const waitlistSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  suggestion: {
    type: String,
    default: ''
  },
  rating: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Waitlist', waitlistSchema);
