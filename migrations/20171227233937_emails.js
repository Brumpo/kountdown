
exports.up = function(knex, Promise) {
  return knex.schema.createTable('emails', table => {
    table.increments()
    table.string('email').notNullable().unique()
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('emails')
};
