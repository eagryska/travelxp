import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: String,
  age: { type: Number, default: 1 },
  gender: String,
  money: { type: Number, default: 0 },
  photo: String,
  cityId: [{ type: mongoose.Schema.ObjectId, ref: 'City', required: true }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Person', personSchema);
