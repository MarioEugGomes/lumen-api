'use strict'

class SessionController {

    async create ({ request, auth }) { 
        const { email, password } = request.all()
    
        const token = await auth.attempt(email, password)
    
        return token
      }

    async me({ request, auth }) {
      try {
        return await auth.getUser()
      } catch (error) {
        //response.send('You are not logged in')
      }
    }
    
}

module.exports = SessionController
