'use strict'

const Service = use('App/Services/Abstract/Service')
const Guia = use('App/Models/Guia')

class RelatoriosService extends Service {

    constructor() {
        super(Guia);
    }

    async getGuiasFaturadas(prof_id, start_date, end_date, estab_id = 0, conv_id = 0) {
      let guia = await Guia.query()
      .where('profissional_id',  237)
      .whereBetween("dt_atendimento", [start_date, end_date]).fetch()

      let total = 0
      let totalGlosado = 0
      let totalExecutado = 0
      let totalLiberado = 0

      let items = guia.toJSON()

      if (conv_id !== 0) {
        items = items.filter(item => item.convenio_id === conv_id)
      }

      if (estab_id !== 0) {
        items = items.filter(item => item.estabelecimento_id === estab_id)
      }

      return {
        total: total,
        totalGlosado: totalGlosado,
        totalExecutado: totalExecutado,
        totalLiberado: totalLiberado,
        items: items
      }
    }
}

module.exports = RelatoriosService;
