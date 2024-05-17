const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/login', (req, res) => {
  res.render('login', { message: req.flash('message') });
});

router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    req.flash('message', 'Registered successfully. Please login.');
    res.redirect('/login');
  } catch (err) {
    console.error(err);
    res.redirect('/register');
  }
});

module.exports = router;
