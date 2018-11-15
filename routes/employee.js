var express = require('express');
var router = express.Router();
var path = require('path');
var multer = require('multer');
var mongoose = require('mongoose');
var Employee = require('../models/Employee.js');

/* storage for avatar upload*/
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads')
    },
    filename: (req, file, cb) => {
      callback(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({storage: storage});
router.post('/uploads', upload.single('avatar'), function (req, res, next) {
   upload(req, res, function(err) {
       console.log(req) 
       if (err) {return next(err)}
       res.json(201)
   })
});

/* GET ALL Employees */
router.get('/', function(req, res, next) {
  Employee.find(function (err, users) {
    if (err) return next(err);
    res.json(users);
  });
});

/* GET SINGLE Employee BY ID */
router.get('/:id', function(req, res, next) {
  Employee.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Employee */
router.post('/', function(req, res, next) {
  Employee.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Employee */
router.put('/:id', function(req, res, next) {
  Employee.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Employee */
router.delete('/:id', function(req, res, next) {
  Employee.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;


