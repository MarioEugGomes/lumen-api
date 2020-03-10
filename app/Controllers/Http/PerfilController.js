'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const PerfilService = use('App/Services/PerfilService')

/**
 * Resourceful controller for interacting with perfils
 */
class PerfilController {
  /** @type {typeof import('App/Services/Abstract/Service')} */
  service;

  constructor() {
    this.service = new PerfilService()
  }

 /**
   * @swagger
   * /api/perfis:
   *   get:
   *     description: Lista todos os perfis
   *     produces:
   *       - application/json
   *     parameters:
   *     responses:
   *       200:
   *         description: perfis
   */
  async all ({ request, response }) {
    let data = this.service.all()

    return data;
  }

  /**
  * @swagger
  * /api/perfis/:id:
  *   get:
  *     perfis:
  *       - Test
  *     summary: Lista perfis por id
  *     parameters:
  *       - name: id
  *         description: identificador de perfis
  *         in: formData
  *         required: true
  *         type: string
  *     responses:
  *       200:
  *         description: Send hello message
  *         example:
  *           message: Hello Guess
  */
  async get ({ request, response }) {
    let id = request.params.id
    let data = this.service.find(id)

    return data;
  }

  /**
   * Create/save a new perfis.
   * POST perfis
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const params = request.all()

    return this.service.save(params)
  }

  /**
   * Update perfis details.
   * PUT or PATCH perfis/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const allparams = request.all()

    return this.service.save(allparams)
  }

  /**
   * Delete a perfis with id.
   * DELETE perfis/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let id = request.params.id

    return this.service.delete(id)
  }
}

module.exports = PerfilController
