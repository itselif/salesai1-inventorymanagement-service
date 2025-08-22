const {
  HttpServerError,
  BadRequestError,
  NotAuthenticatedError,
  ForbiddenError,
  NotFoundError,
} = require("common");
const { hexaLogger } = require("common");
const { InventoryManagementShareToken } = require("models");
const { Op } = require("sequelize");

const getInventoryManagementShareTokenByStoreId = async (storeId) => {
  try {
    const inventoryManagementShareToken =
      await InventoryManagementShareToken.findOne({
        where: {
          storeId: storeId,
          isActive: true,
        },
      });

    if (!inventoryManagementShareToken) {
      return null;
    }
    return inventoryManagementShareToken.getData();
  } catch (err) {
    throw new HttpServerError(
      "errMsg_dbErrorWhenRequestingInventoryManagementShareTokenByStoreId",
      err,
    );
  }
};

module.exports = getInventoryManagementShareTokenByStoreId;
