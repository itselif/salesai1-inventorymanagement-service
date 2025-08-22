const { HttpServerError, BadRequestError } = require("common");

const { InventoryManagementShareToken } = require("models");
const { Op } = require("sequelize");
const { hexaLogger } = require("common");

const getInventoryManagementShareTokenByQuery = async (query) => {
  try {
    if (!query || typeof query !== "object") {
      throw new BadRequestError(
        "Invalid query provided. Query must be an object.",
      );
    }

    const inventoryManagementShareToken =
      await InventoryManagementShareToken.findOne({
        where: { ...query, isActive: true },
      });

    if (!inventoryManagementShareToken) return null;
    return inventoryManagementShareToken.getData();
  } catch (err) {
    throw new HttpServerError(
      "errMsg_dbErrorWhenRequestingInventoryManagementShareTokenByQuery",
      err,
    );
  }
};

module.exports = getInventoryManagementShareTokenByQuery;
