const express = require('express');
const passport = require ('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();
const keys = require('./config/keys');

passport.use(new GoogleStrategy({
  clientID: keys.googleClientId,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback',
}, (accessToken, refreshToken, profile, done) => {
  console.log(accessToken);
  console.log(refreshToken);
  console.log(profile);
  console.log(done);
}));

app.get('/auth/google',passport.authenticate('google',{
  scope: ['profile', 'email']
}));

app.get('/auth/google/callback', passport.authenticate('google'));

const PORT = process.env.PORT || 5000;

app.listen(PORT);
