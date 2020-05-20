'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GuiaMedicoSchema extends Schema {
  up () {
    this.alter('guias', (table) => {
      table.integer('profissional_id').unsigned().index()
      table
        .foreign('profissional_id')
        .references('id')
        .inTable('profissionals')
        .onDelete('cascade')    })
  }

  down () {
  }
}

module.exports = GuiaMedicoSchema
