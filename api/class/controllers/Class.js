'use strict';

/**
 * Class.js controller
 *
 * @description: A set of functions called "actions" for managing `Class`.
 */

module.exports = {

  /**
   * Retrieve class records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.class.search(ctx.query);
    } else {
      return strapi.services.class.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a class record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.class.fetch(ctx.params);
  },

  /**
   * Count class records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.class.count(ctx.query);
  },

  /**
   * Create a/an class record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.class.add(ctx.request.body);
  },

  /**
   * Update a/an class record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.class.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an class record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.class.remove(ctx.params);
  }
};
