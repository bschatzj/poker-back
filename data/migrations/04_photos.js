exports.up = function (knex) {
    return knex.schema.createTable("Photo", tbl => {
        tbl.increments('Photo');
        tbl.string("URL")
            .notNullable()
        tbl.string('Title')
            .notNullable();
        tbl.string("Description")
            .notNullable()
    })
}

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('Photo')
}
