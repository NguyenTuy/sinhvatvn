'use strict';

/**
 * Genus.js controller
 *
 * @description: A set of functions called "actions" for managing `Genus`.
 */

module.exports = {

  /**
   * Retrieve genus records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.genus.search(ctx.query);
    } else {
      return strapi.services.genus.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a genus record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.genus.fetch(ctx.params);
  },

  /**
   * Count genus records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.genus.count(ctx.query);
  },

  /**
   * Create a/an genus record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.genus.add(ctx.request.body);
  },

  /**
   * Update a/an genus record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.genus.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an genus record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.genus.remove(ctx.params);
  }
};
