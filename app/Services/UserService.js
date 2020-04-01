'use strict'

const Service = use('App/Services/Abstract/Service')
const User = use('App/Models/User')

class UserService extends Service {

    constructor() {
        super(User);
    }

    async getUsersPercent() {
      const result = await User
      .query()
      .where('active',  null)
      .fetch()

      const resultActives = await User
      .query()
      .whereNotNull('active')
      .fetch()

      let users = await this.all();

      let total = users.toJSON();
      let totalInatives = result.toJSON();
      let totalActives = resultActives.toJSON();

      let objResult = {
        total: total.length,
        actives: (total.length - totalInatives.length),
        inatives: totalInatives.length,
        percentInatives: parseInt((total.length/totalInatives.length) * 100),
        percentActives: parseInt((total.length/totalActives.length) * 100),
        itemsInatives: result,
        itemsActives: resultActives
      };

      return objResult;
    }

    async getNewUsers() {
      const result = await User
      .query()
      .whereNotNull('active')
      .fetch()

      let users = await this.all();

      let total = users.toJSON();
      let totalInatives = result.toJSON();

      let objResult = {
        total: total.length,
        actives: (total.length - totalInatives.length),
        inatives: totalInatives.length,
        percent: ((total.length/totalInatives.length) * 100),
        items: result
      };

      return objResult;
    }
}

module.exports = UserService;
