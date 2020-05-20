'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GuiaValoresEstabelecimentoCnpjSchema extends Schema {
  up () {
    this.alter('guias', (table) => {
      table.decimal('valor_apresentado', 5, 2)
      table.decimal('valor_executado', 5, 2)
      table.decimal('valor_glosado', 5, 2)
    })

    this.alter('estabelecimentos', (table) => {
      table.string('CNPJ', 20).unique()
    })
  }

  down () {

  }
}

module.exports = GuiaValoresEstabelecimentoCnpjSchema
