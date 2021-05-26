const Fixtures = require('node-mongodb-fixtures');
const dbHandler = require('./dbHandler');

const fixtures = new Fixtures({
  dir: 'fixtures/test'
});

module.exports = async () => {
  await dbHandler.connect();
  await fixtures
    .connect('mongodb://localhost:27019/tinkin-test', {
      useUnifiedTopology: true
    })
    .then(() => fixtures.unload())
    .then(() => fixtures.load())
    .catch(e => console.error(e))
    .finally(() => fixtures.disconnect());
};