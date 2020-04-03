
exports.up = function(knex, Promise) {
    return knex.schema.createTable('isolations', table => {
        table.increments('id').primary()
        table.integer('name_isolation')
        table.string('description')
        table.timestamps()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('isolations')
};
