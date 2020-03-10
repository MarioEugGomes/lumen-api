'use strict'

const Service = use('App/Services/Abstract/Service')
const Guia = use('App/Models/Guia')

class GuiaService extends Service {

    constructor() {
        super(Guia);
    }
}

module.exports = GuiaService;