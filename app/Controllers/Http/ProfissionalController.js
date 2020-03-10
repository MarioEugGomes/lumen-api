'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const ProfissionalService = use('App/Services/ProfissionalService')

/**
 * Resourceful controller for interacting with profissionals
 */
class ProfissionalController {
  /** @type {typeof import('App/Services/Abstract/Service')} */
  service;

  constructor() {
    this.service = new ProfissionalService()
  }

  /**
   * @swagger
   * /api/profissionais:
   *   get:
   *     description: Lista todos os profissionais
   *     produces:
   *       - application/json
   *     parameters:
   *     responses:
   *       200:
   *         description: profissionais
   */
  async all ({ request, response }) {
    let data = this.service.all()

    return data;
  }

  /**
  * @swagger
  * /api/profissionais/:id:
  *   get:
  *     profissionais:
  *       - Test
  *     summary: Lista profissionais por id
  *     parameters:
  *       - name: id
  *         description: identificador de profissionais
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
   * Create/save a new profissionais.
   * POST profissionais
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
   * Update profissionais details.
   * PUT or PATCH profissionais/:id
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
   * Delete a profissionais with id.
   * DELETE profissionais/:id
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

module.exports = ProfissionalController
