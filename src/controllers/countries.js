/* eslint-disable new-cap , array-callback-return, no-param-reassign */

import express from 'express';
const router = module.exports = express.Router();
import Country from '../models/country';
import City from '../models/city';

// router.get('/', (req, res) => {
//   res.render('country/index');
// });

router.get('/', (req, res) => {
  Country.find((err, countries) => {
    // persons[0].populate('cityId');
    // console.log( 'populate:', persons[0].cityId.Name );
    res.render('country/index', { countries });
  });
});

router.get('/new', (req, res) => {
  // const countries = Country.find();
  City.find((err, cities) => {
    // persons[0].populate('cityId');
    // console.log( 'populate:', persons[0].cityId.Name );
    res.render('country/new', { cities });
  // res.render('persons/new', { priorities, categories });
  });
});
// router.post('/new', (req, res) => {
//   // const countries = Country.find();
//   res.redirect('/');
//   // res.render('persons/new', { priorities, categories });
// });

router.post('/', (req, res) => {
  const country = new Country(req.body);
  country.save(() => {
    res.redirect('/country');
  });
});

router.get('/:id/edit', (req, res) => {
  // const cs = Category.find();
  // const cities = [{ id: '1', name: 'Chicago' }, { id: '2', name: 'La' }];
  City.find((err, cities) => {
    // persons[0].populate('cityId');
    // console.log( 'populate:', persons[0].cityId.Name );
    Country.findById(req.params.id, (err2, country) => {
      res.render('country/new', { country, cities });
    });
  });
});

router.post('/:id', (req, res) => {
  Country.findByIdAndUpdate(req.params.id, req.body, () => {
    res.redirect('/country');
  });
});
