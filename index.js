var config = require('./knexfile');

var knex = require('knex')(config.development)

var names = require('./names.json');

var womenNames = require('./womenNames.json')

console.log(womenNames.length)
var smallArray = []

for (var i = 0; i < 100; i++) {
  smallArray.push(womenNames[i])
}

// console.log(smallArray)
//console.log(names)

var chunkSize = 100;

knex.batchInsert('users', smallArray, chunkSize)
  .returning('id')
  .then(function (data) {})
  .catch(function (error) {
    console.error(error);
  })

// knex.select('lastName')
//   .from('Users')
//   .where({
//     firstName: 'Nora'
//   })
//   // .orWhere({
//   //   firstName: 'Zippo'
//   // })
//   .then(function (data) {
//     console.log(data);
//   })

// knex.column('firstName')
//   .from('Users')
//   .then(function (data) {
//     console.log(data);
//   })
//
// knex('users').whereNot({
//     firstName: 'Abhi',
//     lastName: 'Kynd'
//   })
//   .select('id')
//   .then(function (data) {
//     console.log(data);
//   })

// knex('Users')
//   .insert({
//     firstName: 'Devon',
//     lastName: 'McGrath',
//     username: 'DM'
//   })
//   .then(function (response) {
//     console.log(response);
//   })



// knex('users')
//   .where({
//     id: 13
//   })
//   .update({
//     firstName: 'Josh'
//   })
//   .then(function (data) {
//     console.log(data)
//   })

// knex('users')
//   .where({
//     id: 19
//   })
//   .del()
//   .then(function (data) {})
//   .catch(function (error) {
//     console.error(error);
//   })

// knex('users')
//   .where({
//     id: 20
//   })
//   .del()
//   .then(function (data) {})
//
// knex('users')
//   .insert({
//     firstName: 'Ben',
//     lastName: 'Dryden',
//     username: 'Big Ben Dry Man'
//   })
//   .then(function (data) {
//     console.log(data)
//   })
