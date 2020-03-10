'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ConveniosSchema extends Schema {
  up () {
    this.create('convenios', (table) => {
      table.increments()
      table.string(`nome`).notNullable()
      table.boolean(`ativo`).defaultTo(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('convenios')
  }
}

module.exports = ConveniosSchema
