'use strict'

const Service = use('App/Services/Abstract/Service')
const Profissional = use('App/Models/Profissional')

class ProfissionalService extends Service {
    
    constructor() {
        super(Profissional);
    }
}

module.exports = ProfissionalService;