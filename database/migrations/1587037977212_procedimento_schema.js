'use strict'

const { table } = require('../../app/Models/Guia')

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProcedimentoSchema extends Schema {
  up () {
    this.create('procedimentos', (table) => {
      table.string('nome', 255).notNullable().unique()
      table.integer('codigo').notNullable().unique()

      table.increments()
      table.timestamps()
    })

    this.alter('guias', (table) => {
      table.integer('procedimento_id').unsigned().index()
      table
        .foreign('procedimento_id')
        .references('id')
        .inTable('procedimentos')
        .onDelete('cascade')
      })
    }

  down () {
    this.drop('procedimentos')
  }
}

module.exports = ProcedimentoSchema
