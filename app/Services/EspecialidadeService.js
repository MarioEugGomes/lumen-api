'use strict'

const Service = use('App/Services/Abstract/Service')
const Especialidade = use('App/Models/Especialidade')

class EspecialidadeService extends Service {

    constructor() {
        super(Especialidade);
    }
}

module.exports = EspecialidadeService;
