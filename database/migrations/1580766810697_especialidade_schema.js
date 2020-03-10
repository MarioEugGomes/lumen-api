'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EspecialidadeSchema extends Schema {
  up () {
    this.create('especialidades', (table) => {
      table.increments()
      table.string(`nome`).notNullable()
      table.boolean(`ativo`).defaultTo(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('especialidades')
  }
}

module.exports = EspecialidadeSchema
