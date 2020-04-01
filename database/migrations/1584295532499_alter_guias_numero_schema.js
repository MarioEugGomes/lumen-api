'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterGuiasNumeroSchema extends Schema {
  up () {
    this.alter('guias', (table) => {
      table.integer('co_guia', 60).notNullable()
    })
  }

  down () {
    this.table('guias', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AlterGuiasNumeroSchema
