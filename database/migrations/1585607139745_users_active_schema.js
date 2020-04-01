'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsersActiveSchema extends Schema {
  up () {
    this.alter('users', (table) => {
      table.datetime('active')
    })
  }

  down () {
    this.table('users', (table) => {
      // reverse alternations
    })
  }
}

module.exports = UsersActiveSchema
