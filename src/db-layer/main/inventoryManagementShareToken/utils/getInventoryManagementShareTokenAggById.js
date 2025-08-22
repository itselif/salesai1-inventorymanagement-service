const { HttpServerError, NotFoundError } = require("common");
const { hexaLogger } = require("common");

const {
  InventoryItem,
  InventoryMovement,
  LowStockAlert,
  InventoryManagementShareToken,
} = require("models");
const { Op } = require("sequelize");

const getInventoryManagementShareTokenAggById = async (
  inventoryManagementShareTokenId,
) => {
  try {
    const forWhereClause = false;
    const includes = [];

    const inventoryManagementShareToken = Array.isArray(
      inventoryManagementShareTokenId,
    )
      ? await InventoryManagementShareToken.findAll({
          where: {
            id: { [Op.in]: inventoryManagementShareTokenId },
            isActive: true,
          },
          include: includes,
        })
      : await InventoryManagementShareToken.findOne({
          where: {
            id: inventoryManagementShareTokenId,
            isActive: true,
          },
          include: includes,
        });

    if (!inventoryManagementShareToken) {
      return null;
    }

    const inventoryManagementShareTokenData =
      Array.isArray(inventoryManagementShareTokenId) &&
      inventoryManagementShareTokenId.length > 0
        ? inventoryManagementShareToken.map((item) => item.getData())
        : inventoryManagementShareToken.getData();
    await InventoryManagementShareToken.getCqrsJoins(
      inventoryManagementShareTokenData,
    );
    return inventoryManagementShareTokenData;
  } catch (err) {
    throw new HttpServerError(
      "errMsg_dbErrorWhenRequestingInventoryManagementShareTokenAggById",
      err,
    );
  }
};

module.exports = getInventoryManagementShareTokenAggById;
