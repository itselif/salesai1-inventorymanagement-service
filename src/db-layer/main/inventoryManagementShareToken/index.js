const utils = require("./utils");
const dbApiScripts = require("./dbApiScripts");

module.exports = {
  createInventoryManagementShareToken:
    utils.createInventoryManagementShareToken,
  getIdListOfInventoryManagementShareTokenByField:
    utils.getIdListOfInventoryManagementShareTokenByField,
  getInventoryManagementShareTokenById:
    utils.getInventoryManagementShareTokenById,
  getInventoryManagementShareTokenAggById:
    utils.getInventoryManagementShareTokenAggById,
  getInventoryManagementShareTokenListByQuery:
    utils.getInventoryManagementShareTokenListByQuery,
  getInventoryManagementShareTokenStatsByQuery:
    utils.getInventoryManagementShareTokenStatsByQuery,
  getInventoryManagementShareTokenByQuery:
    utils.getInventoryManagementShareTokenByQuery,
  updateInventoryManagementShareTokenById:
    utils.updateInventoryManagementShareTokenById,
  updateInventoryManagementShareTokenByIdList:
    utils.updateInventoryManagementShareTokenByIdList,
  updateInventoryManagementShareTokenByQuery:
    utils.updateInventoryManagementShareTokenByQuery,
  deleteInventoryManagementShareTokenById:
    utils.deleteInventoryManagementShareTokenById,
  deleteInventoryManagementShareTokenByQuery:
    utils.deleteInventoryManagementShareTokenByQuery,
  getInventoryManagementShareTokenByStoreId:
    utils.getInventoryManagementShareTokenByStoreId,
};
