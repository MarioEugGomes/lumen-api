'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Guia extends Model {

  profissional () {
    return this.hasOne('App/Models/Profissional', 'profissional_id', 'id')
  }

  estabelecimento () {
    return this.hasOne('App/Models/Establecimento')
  }
}

module.exports = Guia
