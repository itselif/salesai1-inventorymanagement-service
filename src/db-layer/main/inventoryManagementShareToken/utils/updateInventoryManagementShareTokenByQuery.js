const { HttpServerError, BadRequestError } = require("common");

const { InventoryManagementShareToken } = require("models");
const { Op } = require("sequelize");

const updateInventoryManagementShareTokenByQuery = async (
  dataClause,
  query,
) => {
  try {
    if (!query || typeof query !== "object") {
      throw new BadRequestError(
        "Invalid query provided. Query must be an object.",
      );
    }
    let rowsCount = null;
    let rows = null;

    const options = { where: { query, isActive: true }, returning: true };

    [rowsCount, rows] = await InventoryManagementShareToken.update(
      dataClause,
      options,
    );

    if (!rowsCount) return [];
    return rows.map((item) => item.getData());
  } catch (err) {
    throw new HttpServerError(
      "errMsg_dbErrorWhenUpdatingInventoryManagementShareTokenByQuery",
      err,
    );
  }
};

module.exports = updateInventoryManagementShareTokenByQuery;
