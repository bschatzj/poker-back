
exports.up = function (knex) {
    return knex.schema.createTable("tournaments", table => {
        table.increments("tournament_id");
        table.string("Day")
            .notNullable()
        table.string("Time", 128)
            .notNullable();
        table.float("Description")
            .notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("tournaments");
};
