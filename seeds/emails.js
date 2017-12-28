
exports.seed = function(knex, Promise) {
  return knex('emails').del()
    .then(function () {
      return knex('emails').insert([
        {email: 'schroder.brent@gmail.com'},
        {email: 'bcschroder@gmail.com'},
        {email: 'remeberthis69@gmail.com'},
        {email: 'remeberthis68@gmail.com'}
      ]);
    });
};
