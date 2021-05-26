const dbHandler = require('./dbHandler');

module.exports = async () => {
  await dbHandler.closeDatabase();
};