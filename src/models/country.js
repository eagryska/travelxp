import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const countrySchema = new Schema({
  name: String,
  photos: [String],
  cityId: [{ type: mongoose.Schema.ObjectId, ref: 'City' }],
  balance: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Country', countrySchema);
