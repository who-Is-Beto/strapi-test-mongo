const {setupStrapi, grantPrivilege} = require('../../../test/helpers/strapi')


let user = {};
  let jwt = '';
  const USER_ID = '5f87559d5b5dc3c4b51b4eba';

describe('When call the route "/statuses/search-by-code/:code" ', () => {
    beforeAll(async (done) => {

        await setupStrapi()
        await grantPrivilege('Authenticated', 'permissions.application.controllers.tasks.getTaskByCode');
        user = await strapi.query('user', 'users-permissions').findOne({
          _id: USER_ID
        });
        jwt = strapi.plugins['users-permissions'].services.jwt.issue({
          id: user.id,
        });
        done();
    })
    it('Return the task if exist', async () => {
        const result = await request(strapi.server)
        .get('/statuses/search-by-code/123123')
        .set('Authorization', `Bearer ${jwt}`)
        .expect(200);
        expect(result).toEqual({
            id: '1232143432',
            name: 'Pendiente',
            createdAt:  '2021-05-15',
            lastUpdate: '2021-05-19',
        })
        done()
    })
    it('Return the task if exist', async () => {
        const result = await request(strapi.server)
        .get('/statuses/search-by-code/123123')
        .set('Authorization', `Bearer ${jwt}`)
        .expect(500);
        done()
    })
})
