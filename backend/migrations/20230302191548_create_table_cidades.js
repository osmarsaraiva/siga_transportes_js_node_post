
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cidades', table=>{

        table.increments('id').primary()
        table.string('cidade').notNull()
        table.string('estado').notNull().unique()
      
    })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cidades')
};