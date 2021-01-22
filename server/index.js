/* eslint-disable no-unused-vars */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Review = require('../database/reviews.js');
const Overview = require('../database/overview');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/reviews', async (req, res) => {
  try {
    const results = await Review.find();
    res.status(200).send(results);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/overview', async (req, res) => {
  try {
    const results = await Overview.find();
    res.status(200).send(results);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/review', async (req, res) => {
  try {
    const results = await Review.create(req.body.input);
    res.status(200).send(results);
  } catch (err) {
    res.status(500).send(err);
  }

  // call helper functions that update the review summary module
});

module.exports = app;
