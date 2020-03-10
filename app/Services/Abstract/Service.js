'use strict'


class Service {
    /** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
    entity;

    constructor(entity) {
        this.entity = entity
    }

    async all() {
        return await this.entity.all()
    }

    async findBy(condition, value) {
        return await this.entity.findByOrFail(condition, value)
    }

    async find(id) {
        return await this.entity.find(id)
    }

    async save(condition) {
        const result = await this.entity.findOrCreate(
            condition
          )

        return result
    }

    async delete(id) {
        let result = this.find(id)

        return (await result).delete()
    }
}

module.exports = Service;