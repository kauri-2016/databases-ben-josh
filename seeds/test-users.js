exports.seed = function (knex, Promise) {
    return Promise.join(
      // Deletes ALL existing entries
      knex('Users').del(),

      // Inserts seed entries
      knex('Users').insert({
        firstName: 'J',
        lastName: 'Jacobsen',
        username: 'JiJi'
      }),
      knex('Users').insert({
        firstName: 'Ben',
        lastName: 'Drydan',
        username: 'Dry'
      }),
      knex('Users').insert({
        firstName: 'Ricky',
        lastName: 'Kynd',
        username: 'RK'
      }),
      knex('Users').insert({
        firstName: 'Steph',
        lastName: 'Jennings',
        username: 'SJ'
      }),
      knex('Users').insert({
        firstName: 'Zippo',
        lastName: 'Yap',
        username: 'ZY'
      }),
      knex('Users').insert({
        firstName: 'Ricky',
        lastName: 'Kynd',
        username: 'RK'
      }),
      knex('Users').insert({
        firstName: 'Abhi',
        lastName: 'Kala',
        username: 'AK'
      })
    )
  }
  // , {
  //   firstName: 'Ricky',
  //   lastName: 'Kynd',
  //   username: 'RK'
  // }, {
  //   firstName: 'Steph',
  //   lastName: 'Jennings',
  //   username: 'SJ'
  // }, {
  //   firstName: 'Zippo',
  //   lastName: 'Yap',
  //   username: 'ZY'
  // }, {
  //   firstName: 'Devon',
  //   lastName: 'McGrath',
  //   username: 'DM'
  // }, {
  //   firstName: 'Abhi',
  //   lastName: 'Karla',
  //   username: 'AK'
  // })
