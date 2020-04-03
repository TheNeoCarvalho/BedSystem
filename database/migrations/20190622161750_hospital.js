
exports.up = function(knex, Promise) {
    return knex.schema.createTable('hospitals', table => {
        table.increments('id').primary()
        table.string('name_hospital')
        table.integer('id_country')
        table.integer('id_state')
        table.integer('id_city')
        table.string('latitude',12).defaultTo(0)
        table.string('longitude',12).defaultTo(0)
        table.timestamps(true,true)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('hospitals')
};
