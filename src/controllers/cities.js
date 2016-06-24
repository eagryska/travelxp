/* eslint-disable */

import express from 'express';
import City from '../models/city';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  City.find((err, cities) => {
    res.render('city/index', { cities });
  });
});

router.get('/show/:city', (req, res) => {
  City.findOne({name: req.params.city}, function(err, city){
    City.GetYelp(city.name, 'bars', function (bars) {
      City.GetYelp(city.name, 'sporting events', function(sports){
        City.GetYelp(city.name, 'food', function(food){
          City.GetYelp(city.name, 'music', function(music){
            res.render('city/show', { bars, sports, food, music, city });
          })
        })
      })
    });
  });

});

router.get('/new', (req, res) => {
    res.render('city/new');
});

router.post('/add', (req, res) => {
  const city = new City(req.body);
  city.save(() => {
    res.redirect('/city');
  });
});
