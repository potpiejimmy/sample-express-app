/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var mongoose = require('mongoose');

var PrincipalSchema = mongoose.Schema({
    mail: String
});

module.exports.Principal = mongoose.model('Principal', PrincipalSchema);
