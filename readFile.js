var fs = require('fs');
var path = require('path');

fs.readFile('./data/female.txt', function (err, buffer) {
  if (err) {
    throw err;
  }
  var holdString = buffer.toString()

  var fields = holdString.split(' ').join('')

  fields = fields.replace(/[0-9]/g, '');
  fields = fields.replace(/[^\w\s]/gi, '')
  var object = JSON.parse(fields)
  console.log(object)
    // var trimmed = fields.trim()
    // console.log(trimed)
})

//
// fs.readFile(path, function (err, buffer) {
//       if (err) {
//         console.log(err.message)
//       }

// var fields = string.split(', '),
//     fieldObject = {};
//
// if( typeof fields === 'object') ){
//    fields.each(function(field) {
//       var c = property.split(':');
//       fieldObject[c[0]] = c[1];
//    });
// }
