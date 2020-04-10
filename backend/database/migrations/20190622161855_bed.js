
exports.up = function(knex, Promise) {
    return knex.schema.createTable('beds', table => {
        table.uuid('id').primary()
        table.integer('id_hospital').notNull()
        table.string('floor').notNull() //andar
        table.string('livingroom',20).notNull() // sala
        table.string('allah',50).notNull() // ala
        table.integer('bed').notNull() // leito
        table.integer('isolation')
        table.timestamps()
    })
    // .then(() => knex.raw(`
    //     CREATE TRIGGER before_insert_beds
	// 	BEFORE INSERT ON beds
	// 	FOR EACH ROW
	// 	SET new.id = uuid();`
    // ))
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('beds')
};
