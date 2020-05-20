'use strict'

const Service = use('App/Services/Abstract/Service')
const Convenio = use('App/Models/Convenio')

class ConvenioService extends Service {
    constructor() {
        super(Convenio);
    }

    register(data) {
        const convenio = this.save(data);

        return convenio;
    }
}

module.exports = ConvenioService;
