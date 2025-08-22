const { HttpServerError, NotFoundError, BadRequestError } = require("common");

const { InventoryManagementShareToken } = require("models");
const { Op } = require("sequelize");

const getIdListOfInventoryManagementShareTokenByField = async (
  fieldName,
  fieldValue,
  isArray,
) => {
  try {
    let isValidField = false;

    const inventoryManagementShareTokenProperties = [
      "id",
      "configName",
      "objectName",
      "objectId",
      "ownerId",
      "peopleOption",
      "tokenPermissions",
      "allowedEmails",
      "expireDate",
      "storeId",
    ];

    isValidField = inventoryManagementShareTokenProperties.includes(fieldName);

    if (!isValidField) {
      throw new BadRequestError(`Invalid field name: ${fieldName}.`);
    }

    const expectedType = typeof InventoryManagementShareToken[fieldName];

    if (typeof fieldValue !== expectedType) {
      throw new BadRequestError(
        `Invalid field value type for ${fieldName}. Expected ${expectedType}.`,
      );
    }

    const options = {
      where: isArray
        ? { [fieldName]: { [Op.contains]: [fieldValue] }, isActive: true }
        : { [fieldName]: fieldValue, isActive: true },
      attributes: ["id"],
    };

    let inventoryManagementShareTokenIdList =
      await InventoryManagementShareToken.findAll(options);

    if (
      !inventoryManagementShareTokenIdList ||
      inventoryManagementShareTokenIdList.length === 0
    ) {
      throw new NotFoundError(
        `InventoryManagementShareToken with the specified criteria not found`,
      );
    }

    inventoryManagementShareTokenIdList =
      inventoryManagementShareTokenIdList.map((item) => item.id);
    return inventoryManagementShareTokenIdList;
  } catch (err) {
    throw new HttpServerError(
      "errMsg_dbErrorWhenRequestingInventoryManagementShareTokenIdListByField",
      err,
    );
  }
};

module.exports = getIdListOfInventoryManagementShareTokenByField;
