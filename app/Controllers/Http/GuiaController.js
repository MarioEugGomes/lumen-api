'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const GuiaService = use('App/Services/GuiaService')

/**
 * Resourceful controller for interacting with guias
 */
class GuiaController {
  /** @type {typeof import('App/Services/Abstract/Service')} */
  service;

  constructor() {
    this.service = new GuiaService()
  }

 /**
   * @swagger
   * /api/guias:
   *   get:
   *     description: Lista todos os guias
   *     produces:
   *       - application/json
   *     parameters:
   *     responses:
   *       200:
   *         description: guias
   */
  async all ({ request, response }) {
    let data = this.service.all()

    return data;
  }

  /**
  * @swagger
  * /api/guias/:id:
  *   get:
  *     guias:
  *       - Test
  *     summary: Lista guias por id
  *     parameters:
  *       - name: id
  *         description: identificador de guias
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
   * Create/save a new guias.
   * POST guias
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
   * Update guias details.
   * PUT or PATCH guias/:id
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
   * Delete a guias with id.
   * DELETE guias/:id
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

module.exports = GuiaController
