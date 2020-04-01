'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserConveniosSchema extends Schema {
  up () {
    this.create('user_convenios', (table) => {
      table.increments()

      table.integer('convenio_id').unsigned().index()
      table
        .foreign('convenio_id')
        .references('id')
        .inTable('convenios')
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
    this.drop('user_convenios')
  }
}

module.exports = UserConveniosSchema
