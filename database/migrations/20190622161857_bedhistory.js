
exports.up = function(knex, Promise) {
    return knex.schema.createTable('bedhistorys', table => {
        table.increments('id').primary()
        table.uuid('id_bed')
        table.string('id_patient',50)
        table.integer('occupation',1).notNull()
        table.timestamps()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('bedhistorys')
};
