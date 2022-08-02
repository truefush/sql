const knex = require('knex')(optionsSQLite3);

knex.schema.createTable('products', table => {
	table.increments('id')
	table.string('name')
	table.string('price')
	table.string('img')
})
	.then(() => console.log('Table created'))
	.catch(err => { console.log(err); throw err })
	.finally(() => knex.destroy())