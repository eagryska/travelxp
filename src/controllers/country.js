/* eslint-disable new-cap */

import express from 'express';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  res.render('country/index');
});
