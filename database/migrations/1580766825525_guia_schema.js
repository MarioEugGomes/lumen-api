'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GuiaSchema extends Schema {
  up () {
    this.create('guias', (table) => {
      table.increments()
      table.string(`nu_carteira`).notNullable()

      table.integer('convenios_id').unsigned().references('id').inTable('convenios')
      table.integer('estabelecimento_id')

      table.datetime('dt_atendimento')
      table.datetime('dt_validade')

      table.string(`no_paciente`).notNullable()
      table.string(`tp_consulta`).notNullable()
      table.string(`tp_saida`).notNullable()

      table.integer('co_tabela')
      table.integer('co_procedimento')

      table.timestamps()
    })
  }

  down () {
    this.drop('guias')
  }
}

module.exports = GuiaSchema
