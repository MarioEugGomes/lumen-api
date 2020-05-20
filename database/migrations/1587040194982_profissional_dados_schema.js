'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfissionalDadosSchema extends Schema {
  up () {
    this.alter('profissionals', (table) => {
      table.string('nome', 255).notNullable().unique()
      table.integer('conselho_profissional')
      table.integer('numero_conselho_profissional')
      table.integer('UF')
      table.integer('CBOS')
    })
  }

  down () {
    this.table('profissionals', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ProfissionalDadosSchema
