'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LoteTypeSchema extends Schema {
  up () {
    this.alter('lotes', (table) => {
      table.enu('tipo', [1, 2], { useNative: true, enumName: 'lote_tipo' })
    })
  }

  down () {
  }
}

module.exports = LoteTypeSchema
