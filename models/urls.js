const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  hash: { type: String, required: true, unique: true },
  usageLimit: { type: Number, default: Infinity },
  clicks: { type: Number, default: 0 },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
  clicksMetadata: [
    {
      timestamp: { type: Date, default: Date.now },
      userAgent: String,
      ip: String,
    },
  ],
});

const Url = mongoose.model('Url', urlSchema);

module.exports = Url;
