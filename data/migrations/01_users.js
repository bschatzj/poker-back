
exports.up = function (knex) {
    return knex.schema.createTable("users", table => {
        table.increments("user_id");
        table.string("password")
            .notNullable()
        table.string("email", 128)
            .notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("users");
};
