'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LoteSchema extends Schema {
  up () {
    this.create('lotes', (table) => {
      table.string('file', 255).notNullable().unique()
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

      table.datetime('validado')
      table.integer('validado_usuario_id').unsigned().index()
      table
        .foreign('validado_usuario_id')
        .references('id')
        .inTable('users')
        .onDelete('cascade')

      table.increments()
      table.timestamps()
    })

    this.alter('guias', (table) => {
      table.integer('lote_id').unsigned().index()
      table
        .foreign('lote_id')
        .references('id')
        .inTable('lotes')
        .onDelete('cascade')
      })
  }

  down () {
    this.drop('lotes')
  }
}

module.exports = LoteSchema
