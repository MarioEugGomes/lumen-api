'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const EstabelecimentoService = use('App/Services/EstabelecimentoService')

/**
 * Resourceful controller for interacting with estabelecimentos
 */
class EstabelecimentoController {
  /** @type {typeof import('App/Services/Abstract/Service')} */
  service;

  constructor() {
    this.service = new EstabelecimentoService()
  }

 /**
   * @swagger
   * /api/estabelecimentos:
   *   get:
   *     description: Lista todos os estabelecimentos
   *     produces:
   *       - application/json
   *     parameters:
   *     responses:
   *       200:
   *         description: estabelecimentos
   */
  async all ({ request, response }) {
    let data = this.service.all()

    return data;
  }

  /**
  * @swagger
  * /api/estabelecimentos/:id:
  *   get:
  *     estabelecimentos:
  *       - Test
  *     summary: Lista estabelecimentos por id
  *     parameters:
  *       - name: id
  *         description: identificador de estabelecimentos
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
   * Create/save a new estabelecimentos.
   * POST estabelecimentos
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
   * Update estabelecimentos details.
   * PUT or PATCH estabelecimentos/:id
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
   * Delete a estabelecimentos with id.
   * DELETE estabelecimentos/:id
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

module.exports = EstabelecimentoController
