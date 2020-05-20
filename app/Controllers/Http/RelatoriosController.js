'use strict'
const RelatoriosService = use('App/Services/RelatoriosService')

class RelatoriosController {
  /** @type {typeof import('App/Services/Abstract/Service')} */
  service;

  constructor() {
    this.service = new RelatoriosService()
  }

  async guiasFaturadas ({ request, auth }) {
    const { start_date, end_date, estab_id, conv_id } = request.all()

    let user = await auth.getUser()
    const result = await this.service.getGuiasFaturadas(user.id, start_date, end_date, estab_id, conv_id)

    return result
  }
}

module.exports = RelatoriosController
