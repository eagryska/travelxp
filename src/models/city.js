/* eslint-disable*/

import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
const Schema = mongoose.Schema;
import Yelp from 'yelp';

const citySchema = new Schema ({
  name: {type: String, required: true},
  photos: [String],
  amount: {type: Number, required: true},
  countryID: {type: mongoose.Schema.ObjectId, ref: 'Country'},
  people: [{type: mongoose.Schema.ObjectId, ref: 'Person'}],
  balance: {type: Number, required: true}
});

citySchema.statics.GetYelp = function(city, query, cb) {

  const yelp = new Yelp({
    consumer_key: 'fzeOT-Wgd2ARr06uWYA2Og',
    consumer_secret: '-EBcBNvXFCDRvIGLzlppPdwNpPA',
    token: 'GRU8LzpZwqsm40goEnP6kwp8V2W3D_BE',
    token_secret: 'eWCiMI-0A17cw7RsRnpOJMSHfz8',
  });

  yelp.search({ term: query, limit: 3, location: city})
  .then(function (data) {
    return cb(data.businesses);
  })
  .catch(function (err) {
    console.error(err);
  });
}
module.exports = mongoose.model('City', citySchema);
