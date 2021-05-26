'use strict';


module.exports = {  async getTaskByCode(ctx) {
  console.log('context: ', ctx)
    return await strapi.query('tasks').findOne(ctx);
  },};
