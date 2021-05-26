const Strapi = require('strapi');
const http = require('http');

let instance;

async function setupStrapi() {
  if (!instance) {
    /** the following code in copied from ./node_modules/strapi/lib/Strapi.js */
    const strapi2 = await Strapi();
    console.log("strapi load: ", strapi.load)
    await strapi.load()
    await strapi2.load()
    instance = strapi; // strapi is global now
    await instance.app
      .use(instance.router.routes()) // populate KOA routes
      .use(instance.router.allowedMethods()); // populate KOA methods

    instance.server = http.createServer(instance.app.callback());
  }
  return instance;
}

async function grantPrivilege (
  roleName,
  value
) {
  console.log('entra')
  const role = await strapi.query('role', 'users-permissions').findOne({name: roleName}, []);
  console.log('entra 2')
  const updateObj = value
    .split('.')
    .reduceRight((obj, next) => ({[next]: obj}), {enabled: true, policy: ''});
  console.log('entra 3')
  return await strapi.plugins[
    'users-permissions'
  ].services.userspermissions.updateRole(role.id, updateObj);
};
module.exports = { setupStrapi, grantPrivilege };