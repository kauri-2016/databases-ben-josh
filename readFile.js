var fs = require('fs');
var path = require('path');

var myObject = {}
var emptyArray = []

fs.readFile('./data/female.txt', function (err, buffer) {
  if (err) {
    throw err;
  }
  var holdString = buffer.toString()

  holdString = holdString.split(' ').join('')

  holdString = holdString.replace(/[0-9]/g, '');

  holdString = holdString.replace(/[^\w\s]/gi, '')

  someText = holdString.replace(/(\r\n|\n|\r)/gm, " ");

  var myArray = someText.split(" ")


  for (var i = 0; i < myArray.length; i++) {
    emptyArray.push({
        firstName: myArray[i]
      })
      // myArray[i].firstName =
      // console.log(myArray[i])
      // myObject.firstName = myArray[i]
  }
  console.log(emptyArray);
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
