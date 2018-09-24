
exports.up = function(knex, Promise) {
  return knex.schema.createTable('customers', function(tbl) {
      tbl.increments();
      tbl.string('name');
  })
};

exports.down = function(knex, Promise) {
  
};
