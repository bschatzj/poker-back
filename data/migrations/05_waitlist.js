
exports.up = function (knex) {
    return knex.schema.createTable("waitlist", table => {
        table.increments("waitlist");
        table.string("GameName")
            .notNullable()
        table.string("DisplayName", 128)
            .notNullable();
        table.string("Phone")
        table.bigint('Time')
            .defaultTo(Date.now())
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("waitlist");
};
