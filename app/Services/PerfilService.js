'use strict'

const Service = use('App/Services/Abstract/Service')
const Perfil = use('App/Models/Perfil')

class PerfilService extends Service {

    constructor() {
        super(Perfil);
    }
}

module.exports = PerfilService;