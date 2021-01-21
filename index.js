const axios = require('axios')
module.exports = {
  /**
   * Introducir el usuario de github para obtener sus datos de la API
   * @param {string} user A user that you want to get info 
   */
  getUserInfo: function(user) {
    const url = `https://api.github.com/users/${user}`
    return axios.get(url).then(
      resp => resp.data
    ).catch(err => console.err)
  }
}