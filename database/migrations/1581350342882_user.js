'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', table => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('gender', 1).notNullable()
      table.datetime('birth').notNullable()
      table.string('password', 60).notNullable()
      table.timpasswordestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
