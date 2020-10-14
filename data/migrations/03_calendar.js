exports.up = function (knex) {
  return knex.schema.createTable("calendar", tbl => {
    tbl.increments('calendar');
    tbl.string('Date')
      .notNullable();
    tbl.string('Title')
      .notNullable();
    tbl.string("Description")
      .notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('calendar')
}
