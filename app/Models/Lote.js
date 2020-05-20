'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Lote extends Model {

  static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (userInstance) => {
    })
  }

  guias () {
    return this.hasMany('App/Models/Guia')
  }

  usuario () {
    return this.belongsTo('App/Models/User')
  }

  estabelecimento () {
    return this.belongsTo('App/Models/Estabelecimento')
  }
}

module.exports = Lote
