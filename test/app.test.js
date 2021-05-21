const { setupStrapi } = require('./helpers/strapi');

jest.setTimeout(30000)
beforeAll(async done => {
  await setupStrapi();
  done();
});

afterAll(async done => {
  const dbSettings = strapi.config.get('database.connections.default.settings');

  //delete test database after all tests
  console.log(d)
  if (dbSettings && dbSettings.filename) {
    const tmpDbFile = `${__dirname}/../${dbSettings.filename}`;
    if (fs.existsSync(tmpDbFile)) {
      fs.unlinkSync(tmpDbFile);
    }
  }
  done();
});

describe('Test for strapi app', () => {
  it('strapi is defined', async done => {
    expect(strapi).toBeDefined();
    done();
  });
});
