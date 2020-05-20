'use strict'

const Service = use('App/Services/Abstract/Service')
const Estabelecimento = use('App/Models/Estabelecimento')

class EstabelecimentoService extends Service {

    constructor() {
        super(Estabelecimento);
    }

    async checkEstabelecimento(estabelecimento) {
      const estabelecimentoModel = await Estabelecimento.findOrCreate(
        { nome: estabelecimento.nome.toUpperCase().trim() }
      )

      return estabelecimentoModel.id
    }
}

module.exports = EstabelecimentoService;
