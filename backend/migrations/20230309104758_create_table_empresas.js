exports.up = function(knex, Promise) {
    return knex.schema.createTable('empresas', table=>{

        table.increments('id').primary()
        table.string('name').notNull()
        table.string('cnpj').notNull().unique()
        table.string('ie').notNull()
        table.string('email').notNull()
        table.string('endereco').notNull()
        table.string('responsavel').notNull()
        table.string('telefone').notNull()
        table.date('dataInicio').notNull()
        table.integer('cidadesId').references('id')
           .inTable('cidades').notNull()
    })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('empresas')
};