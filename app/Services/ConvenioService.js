'use strict'

const Service = use('App/Services/Abstract/Service')
const Convenio = use('App/Models/Convenio')

class ConvenioService extends Service {
    
    constructor() {
        super(Convenio);
    }

    save(data) {
        const convenio = this.save({ nome: data["nome"] });

        return convenio;
    }
}

module.exports = ConvenioService;