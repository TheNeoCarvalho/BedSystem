
exports.up = function(knex, Promise) {
    return knex.schema.createTable('citys', table => {
        table.increments('id').primary()
        table.integer('cod_city')
        table.string('name_city')
        table.timestamps(true,true)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('citys')
};
