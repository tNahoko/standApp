exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('list').del()
    .then(function () {
      // Inserts seed entries
      return knex('list').insert([
        {id: 1, date: '2020-01-11', desc:'Meeting with Joe', status: 'done'},
        {id: 2, date: '2020-01-11', desc:'Weekly report for DDD inc.', status: 'cancel'},
        {id: 3, date: '2020-01-11', desc:'Send a package from post office', status: 'pending'},
        {id: 4, date: '2020-01-12', desc:'Submit the market research paper by EOB', status: 'done'},
        {id: 5, date: '2020-01-12', desc:'Visit grandma at the hospital', status: 'done'},
        {id: 6, date: '2020-01-13', desc:'Buy a bottle of wine', status: 'done'},
        {id: 7, date: '2020-01-13', desc:'Borrow two glasses from roommate', status: 'cancel'},
        {id: 8, date: '2020-01-14', desc:'Pick up flowers', status: 'pending'},
        {id: 9, date: '2020-01-15', desc:'Clean the apartment', status: 'done'},
        {id: 10, date: '2020-01-15', desc:'Show up at the station at 6pm', status: 'pending'},
      ]);
    });
};
