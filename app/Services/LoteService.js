'use strict'

const Service = use('App/Services/Abstract/Service')
const Lote = use('App/Models/Lote')

class LoteService extends Service {

    constructor() {
        super(Lote);
    }

    async getAllLote() {
      let lotes = await Lote.query()
      .with('guias')
      .with('usuario')
      .with('estabelecimento')
      .fetch()

      return lotes;
    }
}

module.exports = LoteService;
