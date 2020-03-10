'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const ConvenioService = use('App/Services/ConvenioService')


/**
 * Resourceful controller for interacting with convenios
 */
class ConvenioController {
    /** @type {typeof import('App/Services/Abstract/Service')} */
  service;

  constructor() {
    this.service = new ConvenioService()
  }
  
  /**
   * @swagger
   * /api/convenios:
   *   get:
   *     description: Lista todos os convênios
   *     produces:
   *       - application/json
   *     parameters:
   *     responses:
   *       200:
   *         description: convenios
   */
  async all ({ request, response }) {
    let data = this.service.all()

    return data;
  }

  /**
  * @swagger
  * /api/convenios/:id:
  *   get:
  *     convenios:
  *       - Test
  *     summary: Lista convênio por id
  *     parameters:
  *       - name: id
  *         description: identificador de convênio
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
   * Create/save a new convenio.
   * POST convenios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    let params = request.params

    return this.service.save(params)
  }

  /**
   * Update convenio details.
   * PUT or PATCH convenios/:id
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
   * Delete a convenio with id.
   * DELETE convenios/:id
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

module.exports = ConvenioController
