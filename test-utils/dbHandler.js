const mongoose = require('mongoose');
const {MongoMemoryServer} = require('mongodb-memory-server');

const mongod = new MongoMemoryServer({
  instance: {
    port: 27019,
    ip: 'localhost',
    dbname: 'tinkin-test'
  }
});

module.exports.connect = async () => {
  const uri = await mongod.getUri();

  const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };

  await mongoose.connect(uri, mongooseOptions);
};

module.exports.closeDatabase = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongod.stop();
};