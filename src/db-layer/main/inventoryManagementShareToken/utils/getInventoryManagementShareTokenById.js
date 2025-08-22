const { HttpServerError } = require("common");

let { InventoryManagementShareToken } = require("models");
const { hexaLogger } = require("common");
const { Op } = require("sequelize");

const getInventoryManagementShareTokenById = async (
  inventoryManagementShareTokenId,
) => {
  try {
    const inventoryManagementShareToken = Array.isArray(
      inventoryManagementShareTokenId,
    )
      ? await InventoryManagementShareToken.findAll({
          where: {
            id: { [Op.in]: inventoryManagementShareTokenId },
            isActive: true,
          },
        })
      : await InventoryManagementShareToken.findOne({
          where: {
            id: inventoryManagementShareTokenId,
            isActive: true,
          },
        });

    if (!inventoryManagementShareToken) {
      return null;
    }
    return Array.isArray(inventoryManagementShareTokenId)
      ? inventoryManagementShareToken.map((item) => item.getData())
      : inventoryManagementShareToken.getData();
  } catch (err) {
    console.log(err);
    throw new HttpServerError(
      "errMsg_dbErrorWhenRequestingInventoryManagementShareTokenById",
      err,
    );
  }
};

module.exports = getInventoryManagementShareTokenById;
