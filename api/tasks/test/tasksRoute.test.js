const {setupStrapi, grantPrivilege} = require('../../../test/helpers/strapi')
const request = require('supertest');

let user = {};
let jwt = '';
const USER_ID = '5f87559d5b5dc3c4b51b4eba';
jest.setTimeout(50000)

beforeAll(async (done) => {
    console.log('sdkjfjsdlkf')
      await setupStrapi()
      console.log('sdkjfjsdlkf 2')
      // console.log('strapi: ', strapi)
      await grantPrivilege('Authenticated', 'permissions.application.controllers.tasks.getTaskByCode');
      console.log('sdkjfjsdlkf 3')
      let usuario = await strapi.query('user', 'users-permissions').find()
      console.log('usuario: ', usuario)
      user = await strapi.query('user', 'users-permissions').findOne({
        _id: USER_ID
      });
      jwt = strapi.plugins['users-permissions'].services.jwt.issue({
        id: user.id,
      });
      done();
  })
describe('When call the route "/tasks/search-by-code/:code" ', () => {
    fit('Return the task if exist', async (done) => {
        console.log("jwt: ", jwt, "user: ", user)
        const result = await request(strapi.server)
        .get('/tasks/search-by-code/123123')
        .set('Authorization', `Bearer ${jwt}`)
        .expect(200);
        expect(result).toEqual({
            id: '5f74c5dccfbfc113b9c6b306',
            statusName: 'Pendiente',
            name: 'Pair',
            desciption: 'Pair con Dennis',
            createdAt:  '2021-05-15',
            lastUpdate: '2021-05-19',
            code: 123123
        })
        done()
    })
    jest.setTimeout(50000)
    it('Return the task does if exist', async (done) => {
        const result = await request(strapi.server)
        .get('/tasks/search-by-code/123123')
        .set('Authorization', `Bearer ${jwt}`)
        .expect(500);
        done()
    })
})
