const getUser = require('./../index').getUserInfo;
const expect = require('chai').expect
const nock = require('nock')
const jcvaldes = require('./mocks/jcvaldes')

describe.only('Test API GitHub', () => {
  beforeEach(() => {
    nock('https://api.github.com')
    .get('/users/jcvaldes')
    .reply(200, jcvaldes)
  })
  it('Obtener datos del usuario jcvaldes', () => {
    // se debe hacer mockeado
    return getUser('jcvaldes').then((result) => {
      // Probar el tipo de variable que obtenemos de resp. Tiene que ser un objeto
      expect(typeof result).to.equal('object')
      // comprobar que el usuario de la API es jcvaldes
      expect(result.login).to.equal('jcvaldes')
       // comprobar que el ID del usuario es numerico
       expect(typeof result.id).to.equal('number')
      
    })

  })
})
