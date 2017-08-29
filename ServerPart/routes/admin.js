'use strict';
var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var Events = require('../models/event');
var mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectId;


var csrfProtection = csrf();
router.use(csrfProtection);

mongoose.connect('localhost:27017/TechAdmin');

router.get('/add-events', function (req, res, next) {
    res.render('admin/add',{csrfToken:req.csrfToken()}) ;
});

router.post('/add-events', function (req, res, next) {
    var items = req.body;
    Events.find({'imagePath': items.imagePath, 'title':items.title},function (err, data) {
        if(data.length !== 0) {
            res.redirect('/event/add-events');
        }
        else {
            var events =
                new Events({
                    imagePath:items.imagePath,
                    title: items.title,
                    summary:items.summary,
                    description:items.description
                });

            events.save(function (err, result) {
                console.log('save()');
                if(err) throw err;
                res.redirect('/');
            });
        }
    });
});


router.get('/delete', function (req, res, next) {
    var messages = req.flash('error');
    Events.find(function (err, data) {
        res.render('admin/delete',{ events:data});
    });
});



router.get('/delete/:id', function (req, res, next) {
    var EventID = req.params.id;
    Products.remove({_id: new ObjectId(req.params.id)}, function (err) {
      if(err) {
          res.json(err);
      }
      else {
          res.redirect('/event/delete');
      }
  });
});

module.exports = router;