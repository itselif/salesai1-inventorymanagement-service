const { HttpServerError } = require("common");

const { InventoryManagementShareToken } = require("models");
const { Op } = require("sequelize");

const updateInventoryManagementShareTokenByIdList = async (
  idList,
  dataClause,
) => {
  try {
    let rowsCount = null;
    let rows = null;

    const options = {
      where: { id: { [Op.in]: idList }, isActive: true },
      returning: true,
    };

    [rowsCount, rows] = await InventoryManagementShareToken.update(
      dataClause,
      options,
    );
    const inventoryManagementShareTokenIdList = rows.map((item) => item.id);
    return inventoryManagementShareTokenIdList;
  } catch (err) {
    throw new HttpServerError(
      "errMsg_dbErrorWhenUpdatingInventoryManagementShareTokenByIdList",
      err,
    );
  }
};

module.exports = updateInventoryManagementShareTokenByIdList;
