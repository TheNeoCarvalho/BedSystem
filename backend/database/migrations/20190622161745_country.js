
exports.up = function(knex, Promise) {
    return knex.schema.createTable('countrys', table => {
        table.increments('id').primary()
        table.integer('cod_country')
        table.string('name_country')
        table.enum('activate', [true, false])
        table.timestamps()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('countrys')
};
