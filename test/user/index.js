const request = require('supertest');

const mockUserData = {
  username: 'tester3',
  identification: '03621654789',
  email: 'tester@strapi.com',
  provider: 'local',
  password: '1234abc',
  confirmed: true,
  blocked: null,
};

describe('Test for auth route', () => {
  it('should login user and return jwt token', async done => {
    await strapi.plugins['users-permissions'].services.user.add({
      ...mockUserData,
    });

    await request(strapi.server)
      .post('/auth/local')
      .set('accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({
        identifier: mockUserData.email,
        password: mockUserData.password,
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .then(data => {
        expect(data.body.jwt).toBeDefined();
      });

    done();
  });

  it('should return users data for authenticated user', async done => {
    const defaultRole = await strapi.query('role', 'users-permissions').findOne({}, []);

    const role = defaultRole ? defaultRole.id : null;

    const user = await strapi.plugins['users-permissions'].services.user.add({
      ...mockUserData,
      username: 'tester2',
      identification: '9875543210',
      email: 'tester2@strapi.com',
      role,
    });

    const jwt = strapi.plugins['users-permissions'].services.jwt.issue({
      id: user.id,
    });

    await request(strapi.server)
      .get('/users/me')
      .set('accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + jwt)
      .expect('Content-Type', /json/)
      .expect(200)
      .then(data => {
        expect(data.body).toBeDefined();
        expect(data.body.id).toBe(user.id);
        expect(data.body.username).toBe(user.username);
        expect(data.body.email).toBe(user.email);
      });

    done();
  });
});