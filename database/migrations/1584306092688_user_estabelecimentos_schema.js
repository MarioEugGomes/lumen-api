'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserEstabelecimentosSchema extends Schema {
  up () {
    this.create('user_estabelecimentos', (table) => {
      table.increments()

      table.integer('estabelecimento_id').unsigned().index()
      table
        .foreign('estabelecimento_id')
        .references('id')
        .inTable('estabelecimentos')
        .onDelete('cascade')

      table.integer('usuario_id').unsigned().index()
      table
        .foreign('usuario_id')
        .references('id')
        .inTable('users')
        .onDelete('cascade')
    })
  }

  down () {
    this.drop('user_estabelecimentos')
  }
}

module.exports = UserEstabelecimentosSchema
