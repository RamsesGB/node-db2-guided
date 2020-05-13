// "UP" describes the changes that will be applied to the database
exports.up = function (knex) {
  //create the vegetables table
  return knex.schema.createTable('vegetables', (tbl) => {
    // <---- remember to 'return' the call to knex.schema
    // 1st thing you want to do is add a named ID that is your primary key that is type interger that autoincrements
    tbl.increments();
    tbl.string('name', 255).notNullable().unique().index();
    tbl.boolean('favorite');
  });
};

// "DOWN" describes how to undo the changes from the up function
exports.down = function (knex) {
  //remove (drop) the vegetables table
  return knex.schema.dropTableIfExists('vegetables');
};
