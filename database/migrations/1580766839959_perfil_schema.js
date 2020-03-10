'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PerfilSchema extends Schema {
  up () {
    this.create('perfils', (table) => {
      table.increments()
      table.string(`nome`).notNullable()
      table.string(`descricao`).notNullable()

      table.boolean(`ativo`).defaultTo(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('perfils')
  }
}

module.exports = PerfilSchema
