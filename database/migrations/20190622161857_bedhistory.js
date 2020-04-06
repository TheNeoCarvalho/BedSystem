
exports.up = function(knex, Promise) {
    return knex.schema.createTable('bedhistorys', table => {
        table.increments('id').primary()
        table.string('id_patient',50)
        table.integer('occupation',1).notNull()
        table.timestamps()
        table.uuid('id_bed')
            .references('id').inTable('beds').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('bedhistorys')
};
