const { db } = require('./.env')

module.exports = {
	client: 'mysql',
	connection: db,
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'migrations',
		directory: './database/migrations'
	},
	seeds: {
		directory: './database/seeds'
	},
	onInsertTrigger: {
		onInsertTrigger: table => `
		CREATE TRIGGER before_insert_${table}
		BEFORE INSERT ON ${table}
		FOR EACH ROW
		SET new.id = uuid();
		`
	}
};
