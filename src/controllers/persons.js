/* eslint-disable new-cap , array-callback-return, no-param-reassign */

import express from 'express';
import Person from '../models/person';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  Person.find((err, persons) => {
    // persons[0].populate('cityId');
    // console.log( 'populate:', persons[0].cityId.Name );
    res.render('persons/index', { persons });
  });
});
router.get('/new', (req, res) => {
  // const countries = Country.find();
  res.render('persons/new');
  // res.render('persons/new', { priorities, categories });
});

// router.post('/new', (req, res) => {
//   // const countries = Country.find();
//   res.redirect('/');
//   // res.render('persons/new', { priorities, categories });
// });

router.post('/', (req, res) => {
  const person = new Person(req.body);
  person.save(() => {
    res.redirect('/person');
  });
});

router.get('/:id/edit', (req, res) => {
  // const cs = Category.find();
  const cities = [{ id: '1', name: 'Chicago' }, { id: '2', name: 'La' }];
  Person.findById(req.params.id, (err, person) => {
    res.render('persons/new', { person, cities });
  });
});

router.post('/:id', (req, res) => {
  Person.findByIdAndUpdate(req.params.id, req.body, () => {
    res.redirect('/person');
  });
});
