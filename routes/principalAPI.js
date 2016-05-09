/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express = require('express');
var schema = require('../models/schema');

var Principal = schema.Principal;

var router = express.Router();

router.get('/', function (req, res) {
    Principal.find(function (err, principals) {
        if (err) return console.error(err);
        res.send(principals);
    });
});

router.post('/', function (req, res) {
    console.log(req.body);
    var p = new Principal(req.body);
    p.save(function (err, product, numAffected) {
        if (err) res.send(err);
        else res.send("Saved ID " + product._id + "\n");
    });
});

module.exports = router;
