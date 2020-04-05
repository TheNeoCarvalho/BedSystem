
exports.up = function(knex, Promise) {
    return knex.schema.createTable('bedhistorys', table => {
        table.increments('id').primary()
        table.uuid('id_bed')
        table.string('id_patient',50)
        table.timestamps()
        table.timestamp('start_occupation').nullable()
        table.timestamp('end_occupation').nullable()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('bedhistorys')
};
