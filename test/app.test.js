const { setupStrapi } = require('./helpers/strapi');

jest.setTimeout(30000)
beforeAll(async done => {
  await setupStrapi();
  done();
});

describe('Test for strapi app', () => {
  it('strapi is defined', async done => {
    expect(strapi).toBeDefined();
    done();
  });
});
