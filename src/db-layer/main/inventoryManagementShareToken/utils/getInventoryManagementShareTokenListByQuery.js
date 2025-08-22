const { HttpServerError, BadRequestError } = require("common");

const { InventoryManagementShareToken } = require("models");
const { Op } = require("sequelize");
const { hexaLogger } = require("common");

const getInventoryManagementShareTokenListByQuery = async (query) => {
  try {
    if (!query || typeof query !== "object") {
      throw new BadRequestError(
        "Invalid query provided. Query must be an object.",
      );
    }

    const inventoryManagementShareToken =
      await InventoryManagementShareToken.findAll({
        where: { ...query, isActive: true },
      });

    //should i add not found error or only return empty array?
    if (
      !inventoryManagementShareToken ||
      inventoryManagementShareToken.length === 0
    )
      return [];

    //      if (!inventoryManagementShareToken || inventoryManagementShareToken.length === 0) {
    //      throw new NotFoundError(
    //      `InventoryManagementShareToken with the specified criteria not found`
    //  );
    //}

    return inventoryManagementShareToken.map((item) => item.getData());
  } catch (err) {
    throw new HttpServerError(
      "errMsg_dbErrorWhenRequestingInventoryManagementShareTokenListByQuery",
      err,
    );
  }
};

module.exports = getInventoryManagementShareTokenListByQuery;
