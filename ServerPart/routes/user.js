"use strict";
var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var User = require('../models/user');
var passport = require('passport');



var csrfProtection = csrf();
router.use(csrfProtection);



router.get('/main',isLoggedIn, function (req, res, next) {
    var profile = [];
    User.find({'email':req.body.email}, function (err, data) {
        if(req.body.email === data.email){
            profile.push(data);
        }
        res.render('admin/main', {profile: profile});
    });
});

router.get('/logout', function (req, res, next) {
    req.logout();
    res.redirect('/');
});


router.use('/',notLoggedIn, function (req, res, next) {
    console.log('not logged in');
    next();
});


router.get('/signup',function (req, res, next) {
    var messages = req.flash('error');
    res.render('./admin/signup',{csrfToken:req.csrfToken(), messages:messages, hasError: messages.length > 0});
});

router.post('/signup',passport.authenticate('local-signup',{
    successRedirect:'/admin/main',
    failureRedirect:'/admin/signup',
    failureFlash:true
}));

router.get('/signin',function (req, res, next) {
    var messages = req.flash('error');
    res.render('./admin/signin',{csrfToken:req.csrfToken(), messages:messages});
});

router.post('/signin',passport.authenticate('local-login',{
    successRedirect:'/admin/main',
    failureRedirect:'/admin/signin',
    failureFlash:true
}));


module.exports = router;

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}


function notLoggedIn(req, res, next) {
    if(!req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}