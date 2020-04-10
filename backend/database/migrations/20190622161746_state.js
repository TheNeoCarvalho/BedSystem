
exports.up = function(knex, Promise) {
    return knex.schema.createTable('states', table => {
        table.increments('id').primary()
        table.string('initials',2)
        table.string('name_state',25)
        table.timestamps()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('states')
};
