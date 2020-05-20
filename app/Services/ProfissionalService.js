'use strict'

const Service = use('App/Services/Abstract/Service')
const Profissional = use('App/Models/Profissional')

class ProfissionalService extends Service {

    constructor() {
        super(Profissional);
    }

    async checkProfissional(profissional) {
      if (!profissional.nome || !profissional.co_profissional) {
        return;
      }

      const profissionalModel = await Profissional.findOrCreate(
        { nome: profissional.nome },
        { conselho_profissional: profissional.conselho_profissional },
        { co_profissional: profissional.co_profissional },
        { UF: profissional.UF },
        { CBOS: profissional.CBOS }
      )

      return profissionalModel.id
    }
}

module.exports = ProfissionalService;
