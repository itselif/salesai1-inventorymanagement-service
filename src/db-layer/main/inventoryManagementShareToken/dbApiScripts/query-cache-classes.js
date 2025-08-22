const { QueryCache, QueryCacheInvalidator } = require("common");

const { Op } = require("sequelize");

class InventoryManagementShareTokenQueryCache extends QueryCache {
  constructor(input, wClause) {
    super("inventoryManagementShareToken", [], Op.and, Op.eq, input, wClause);
  }
}
class InventoryManagementShareTokenQueryCacheInvalidator extends QueryCacheInvalidator {
  constructor() {
    super("inventoryManagementShareToken", []);
  }
}

module.exports = {
  InventoryManagementShareTokenQueryCache,
  InventoryManagementShareTokenQueryCacheInvalidator,
};
