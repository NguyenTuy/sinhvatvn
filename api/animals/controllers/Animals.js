'use strict';

/**
 * Animals.js controller
 *
 * @description: A set of functions called "actions" for managing `Animals`.
 */

module.exports = {

  /**
   * Retrieve animals records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.animals.search(ctx.query);
    } else {
      return strapi.services.animals.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a animals record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.animals.fetch(ctx.params);
  },

  /**
   * Count animals records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.animals.count(ctx.query);
  },

  /**
   * Create a/an animals record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.animals.add(ctx.request.body);
  },

  /**
   * Update a/an animals record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.animals.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an animals record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.animals.remove(ctx.params);
  }
};
