'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GuiasValorSchema extends Schema {
  up () {
    this.alter('guias', (table) => {
      table.decimal('valor', 5, 2)
    })
  }

  down () {
    this.table('guias', (table) => {
      // reverse alternations
    })
  }
}

module.exports = GuiasValorSchema
