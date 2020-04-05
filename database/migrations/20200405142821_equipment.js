
exports.up = function(knex, Promise) {
    return knex.schema.createTable('equipments', table => {
        table.increments('id').primary()
        table.uuid('id_bed')
        table.enum('name_equipment',['Eletrocardiógrafo', 'Oxímetro', 'Monitor multiparamétrico', 'Ventilador pulmonar', 'Estativa'])
        table.string('description')
        table.timestamps()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('equipments')
};
