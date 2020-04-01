'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfissionalSchema extends Schema {
  up () {
    this.create('profissionals', (table) => {
      table.increments()
      table.integer(`co_profissional`).notNullable()
      table.integer('especialidade_id').unsigned().references('id').inTable('especialidades')
      table.integer('usuario_id').unsigned().references('id').inTable('users')

      table.timestamps()
    })
  }

  down () {
    this.drop('profissionals')
  }
}

module.exports = ProfissionalSchema
