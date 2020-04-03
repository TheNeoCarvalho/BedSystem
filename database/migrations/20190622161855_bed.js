
exports.up = function(knex, Promise) {
    return knex.schema.createTable('beds', table => {
        table.uuid('id').primary()
        table.integer('id_city').notNull()
        table.integer('id_hospital').notNull()
        table.integer('sala').notNull()
        table.string('ala',50).notNull()
        table.integer('isolation').defaultTo(0)
        table.integer('equipments').defaultTo(0)
        table.timestamps()
    })
    .then(() => knex.raw(`
        CREATE TRIGGER before_insert_beds
		BEFORE INSERT ON beds
		FOR EACH ROW
		SET new.id = uuid();`
    ))
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('beds')
};
