'use strict'

const Service = use('App/Services/Abstract/Service')
const Estabelecimento = use('App/Models/Estabelecimento')

class EstabelecimentoService extends Service {
    
    constructor() {
        super(Estabelecimento);
    }
}

module.exports = EstabelecimentoService;